import { Component, OnInit, Input } from '@angular/core';
import { Order, Entry, OrderStatus } from '../../../../../models/order';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { SystemService } from '../../../../services/system.service';
import { NanoPrinterService } from '../../../../services/nano-printer.service';
import { firestore } from "firebase"
import "firebase/firestore"

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  @Input()
  order: Order;

  text: string;

  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public system: SystemService,
    public nanoPrinterProvider: NanoPrinterService
  ) { }

  get canChangeStatusToIncomplete(): boolean {
    if (!this.order) return false
    if (this.order.status === OrderStatus.accepted ||
      this.order.status === OrderStatus.delivery) return true
    return false
  }

  ngOnInit() {
    for (let entry of this.order.entries) {
      Entry.calculateEntryValues(entry)
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  print() {
    this.nanoPrinterProvider.printId("section-to-print")
  }

  async changeStautsIncomplete() {
    let alert = await this.alertCtrl.create({
      header: 'Tem certeza que deseja cancelar o pedido?',
      message: "O cancelamento do pedido após ser aceito irá incidir cobranças referente a transação, salvo se for de responsabilidade do cliente.",
      inputs: [{
        name: 'reason',
        placeholder: 'Por favor, informe o motivo.',
        type: 'text',
      }],
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: async (data) => {
            let load = await this.loadingCtrl.create();
            load.present()
            if (this.order) {
              Order.update<Order>(this.order.id, {
                cancellation_reason: data.reason,
                status: OrderStatus.incomplete,
                incomplete_at: firestore.FieldValue.serverTimestamp()
              }).subscribe(() => {
                this.dismiss()
                load.dismiss()
              }, err => {
                this.system.showErrorAlert(err)
              });
            } else {
              load.dismiss()
              this.dismiss()
              this.system.showErrorAlert(Error("Pedido inválido"))
            }
          }
        }
      ]
    });
    alert.present();
  }
}