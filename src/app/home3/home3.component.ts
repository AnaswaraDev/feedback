
import { Component, OnInit } from '@angular/core';

export class FeedBackElement { 
  questions : string;
  excellent: string;
  good : string;
  average : string;
  //weight: number;
  poor: string;
  vpoor : string;
 
}
const ELEMENT_DATA:FeedBackElement[] = [
  {questions : "How satisfied are you in this application?",excellent : "star1" ,good:  "star2",average : "star3", poor: "star4 " ,vpoor : "star5" },
  {questions : "How was your overall quality of the application?",excellent : "star1" ,good:  "star2",average : "star3", poor: "star4 " ,vpoor : "star5" },
  {questions : "How would you rate our application on for money?",excellent : "star1" ,good:  "star2",average : "star3", poor: "star4 " ,vpoor : "star5" }
];


@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component  {

  displayedColumns: any[] =  ['questions','excellent', 'good','average','poor' ,'vpoor'];
  dataSource = ELEMENT_DATA;

}