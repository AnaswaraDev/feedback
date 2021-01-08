
import { Component, OnInit } from '@angular/core';

export class FeedBackElement { 
  name: string;
  clinican : string;
  positions: number;
  //weight: number;
  created: string;
  modified : string;
  feedback : string;
}
const ELEMENT_DATA:FeedBackElement[] = [
  {positions : 777473 ,name: 'Frank M Canton',clinican : 'John J Joseph', created: "12/12/2020 " ,modified : "12/12/2020 "  ,feedback: ''}
  
 
];


@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component  {

  displayedColumns: any[] =  ['positions', 'name','clinican','created' ,'modified','feedback'];
  dataSource = ELEMENT_DATA;

}