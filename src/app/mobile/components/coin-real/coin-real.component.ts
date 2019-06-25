import { Component, Input } from '@angular/core';

@Component({
  selector: 'coin-real',
  templateUrl: './coin-real.component.html',
  styleUrls: ['./coin-real.component.scss']
})
export class CoinRealComponent {

  @Input() value: string;

}