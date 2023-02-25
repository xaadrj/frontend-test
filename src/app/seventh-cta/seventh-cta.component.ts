import { Component } from '@angular/core';

@Component({
  selector: 'app-seventh-cta',
  templateUrl: './seventh-cta.component.html',
  styleUrls: ['./seventh-cta.component.css']
})
export class SeventhCtaComponent {

  toggle: boolean = false;

  toggleModal(selectNum: boolean){
    this.toggle = selectNum;
  }

}
