import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'nano-navbar',
  templateUrl: './nano-navbar.component.html',
  styleUrls: ['./nano-navbar.component.scss']
})
export class NanoNavbarComponent {

  @Input() title: string;
  @Input() icon: string;
  @Input() helpPage: number;
  constructor(public shared: SharedService) { }

  onHelp() {
    window.open(`${this.shared.urlManual}${this.helpPage}`, '_blank')
  }

}
