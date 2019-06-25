import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-denunciation-list',
  templateUrl: './denunciation-list.page.html',
  styleUrls: ['./denunciation-list.page.scss'],
})
export class DenunciationListPage implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    User.list().subscribe((users: User[]) => {
      users.forEach(user => {
        if (user.denunciations && user.denunciations.length > 0) {
          //Obter usuários que possuem denúncia
          this.users.push(user);
        }
      });
    })
  }
}
