import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-country-list',
  template: `
    <h2 style="color:green">
      country-list works!
    </h2>
    <h2>User id is: {{userid}}</h2>
  `,
  styles: `
  .custom{color:blue;}
  `
})
export class CountryListComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  userid:any;
  ngOnInit(): void{
  console.log("User id is: " + this.route.snapshot.paramMap.get('id')); 
  this.userid = this.route.snapshot.paramMap.get('id');
  }
}
