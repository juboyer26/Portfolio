import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})
export class TodoComponent implements OnInit {
  listName: any;
  list: any[];
  task: any[];
  selectedList: any;
  showAddList: boolean = false;
  constructor() {
    this.list = [{
      name: "Meeting",
      task: [
        { taskName: "Get food" },
        { taskName: "invite people" },
        { taskName: "leave" }
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
    $('#addList').on('click', function () {
      console.log("modal");

      $("#exampleModal").modal('show');
    })
  }

  chosenList(selected: any) {

    $("#list").on('click', 'li', function () {
      $("#list li.active").removeClass("active");
      $(this).addClass('active')
    })

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

  displayAddList() {
    this.showAddList = !this.showAddList
  }

  onSubmit(data: any) {
    console.log();
    var temp = {
      name: data.name,
      task: []
    }
    this.list.push(temp)

  }

}
