import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  list:any[]=[];
  addTask(task:string)
  {
    this.list.push({id:this.list.length,data:task});
     console.log(this.list);
  }
  removeItem(id:number)
  {
    this.list = this.list.filter(item=>item.id!=id)
  }
}
