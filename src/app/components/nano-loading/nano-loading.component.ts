import { Component, Input } from '@angular/core';

@Component({
  selector: 'nano-loading',
  templateUrl: './nano-loading.component.html',
  styleUrls: ['./nano-loading.component.scss']
})
export class NanoLoadingComponent {
  @Input() loading: boolean;
}
