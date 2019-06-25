import { Component, OnInit, ViewChild, ElementRef, Renderer, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplementOption } from '../../../../../models/product';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-options-complement',
  templateUrl: './add-options-complement.page.html',
  styleUrls: ['./add-options-complement.page.scss'],
})
export class AddOptionsComplementPage implements OnInit {

  @ViewChild('input') input;
  form: FormGroup

  @Input()
  option: ComplementOption
  constructor(private elementRef: ElementRef,
    private renderer: Renderer,
    private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('0', Validators.required),
      active: new FormControl(true),
    })
    if (this.option) {
      this.form.patchValue(this.option)
    }
    this.setFocus()
  }

  setFocus() {
    setTimeout(() => {
      this.input.setFocus();
    }, 500);
  }

  setFocus2() {
    setTimeout(() => {
      let element = this.elementRef.nativeElement.querySelector('input');
      this.renderer.invokeElementMethod(element, 'focus', []);
    }, 500);
  }

  saveOption() {
    this.popoverCtrl.dismiss(this.form.value)
  }

  cancel() {
    this.popoverCtrl.dismiss()
  }

}