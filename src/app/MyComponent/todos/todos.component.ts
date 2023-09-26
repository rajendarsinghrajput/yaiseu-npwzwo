import { Component } from '@angular/core';
import {Todo} from "../../todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todo:Todo[];
  constructor()
  {
    this.todo=[
      {
      sno:1,
      title:"this is title",
      active:true
      },
      {
        sno:2,
        title:"this is title2",
        active:false
        },
      {
        sno:3,
        title:"this is title3",
        active:true
        }
    ]

  }

}
