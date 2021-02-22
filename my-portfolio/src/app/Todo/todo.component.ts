import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list: any[];
  task: any[];
  selectedList: any;
  constructor() {
    this.list = [{
      name: "Meeting",
      task: [
        { taskName: "Get food" },
        { taskName: "invite people" }
      ]
    },
    {
      name: "Vacation",
      task: [
        { taskName: "book tickets" },
        { taskName: "enjoy" }
      ]
    }
      , {
      name: "Cooking",
      task: [
        { taskName: "Get food" },
        { taskName: "eat food" }
      ]
    }]
  }

  ngOnInit(): void {
  }

  chosenList(selected: any) {
    console.log(selected);
    var temp = []
    this.list.forEach(e => {
      if (e.name == selected) {
        e['task'].forEach(element => {
          console.log(element.taskName);
          temp.push(element.taskName)
        });
      }
    })
    this.task = temp;
    console.log(this.task);

  }

}
