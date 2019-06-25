import { Component, Input, OnInit } from '@angular/core';
import { IntervalHours } from '../../../../../../models/filial';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-interval-hours',
  templateUrl: './select-interval-hours.page.html',
  styleUrls: ['./select-interval-hours.page.scss'],
})
export class SelectIntervalHoursPage implements OnInit {

  HOURS: string[] = HALF_HOURS

  canRemove: boolean = false;

  @Input()
  interval: IntervalHours

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.interval) {
      this.canRemove = true
    }
    else {
      this.interval = {
        start: "",
        end: "",
        open: true
      }
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  /**
   * passa o booleano open como false para que façam a remoção desse intervalo
   */
  remove() {
    this.interval.open = false;
    this.modalCtrl.dismiss(this.interval)
  }

  success() {
    this.modalCtrl.dismiss(this.interval)
  }

  /**
   * Verifica se foi selecionado um Horário de fim antes do Horário de inicio
   */
  get check_invalid_interval(): boolean {
    return this.interval.start && this.interval.end && this.interval.end <= this.interval.start
  }

  /**
   * Verifica se foram selecionados e se o intervalo está correto
   */
  get valid(): boolean {
    return this.interval.start && this.interval.end && this.interval.start < this.interval.end
  }
}


const HALF_HOURS: string[] = [
  "00:00", "00:30", "01:00", "01:30",
  "02:00", "02:30", "03:00", "03:30",
  "04:00", "04:30", "05:00", "05:30",
  "06:00", "06:30", "07:00", "07:30",
  "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
  "22:00", "22:30", "23:00", "23:30",
  "24:00"
]