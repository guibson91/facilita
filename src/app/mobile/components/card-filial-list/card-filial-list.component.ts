import { Component, OnInit, Input } from '@angular/core';
import { Filial } from '../../../../models/filial';

@Component({
  selector: 'card-filial-list',
  templateUrl: './card-filial-list.component.html',
  styleUrls: ['./card-filial-list.component.scss']
})
export class CardFilialListComponent implements OnInit {

  @Input() filial: Filial

  constructor() { }

  ngOnInit() {
    
  }

}