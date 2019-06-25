import { Component, Input } from '@angular/core';

@Component({
  selector: 'nano-error',
  templateUrl: './nano-error.component.html',
  styleUrls: ['./nano-error.component.scss']
})
export class NanoErrorComponent{
  
  @Input() error: string;
}
