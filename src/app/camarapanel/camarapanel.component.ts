import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-camarapanel',
  templateUrl: './camarapanel.component.html',
  styleUrls: ['./camarapanel.component.scss']
})
export class CamarapanelComponent implements OnInit {

  display: string = "";
  display_open:string = "";

  constructor() { 

  }
  
  ngOnInit(): void {
  }

  close() {
    $('.close-panel').addClass('none');
    $('.camara-panel').addClass('none');
    $('.open-panel').removeClass('none');
  }

  open() {
    $('.close-panel').removeClass('none');
    $('.camara-panel').removeClass('none');
    $('.open-panel').addClass('none');
  }
}
