import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  constructor(){}

@Output() updateDataEvent = new EventEmitter<string>();


}
