import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  listName: any;
  list: any[];
  task: any[];
  selectedList: any;
  showAddList: boolean = false;
  modelForm: FormGroup;
  taskForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.list = [
      {
        name: 'Meeting',
        task: [
          { taskName: 'Get food' },
          { taskName: 'invite people' },
          { taskName: 'leave' },
        ],
      },
      {
        name: 'Vacation',
        task: [{ taskName: 'book tickets' }, { taskName: 'enjoy' }],
      },
      {
        name: 'Cooking',
        task: [{ taskName: 'Get food' }, { taskName: 'eat food' }],
      },
    ];

    this.modelForm = this.formbuilder.group({ listName: '' });
    this.taskForm = this.formbuilder.group({ taskName: '' });
  }

  ngOnInit(): void {
    $('#addList').on('click', function () {
      console.log('modal');

      $('#exampleModal').modal('show');
    });

    $('#exit').on('click', function () {
      console.log('modal');

      $('#exampleModal').modal('hide');
    });

    $('#addTask').on('click', function () {
      console.log('modal');

      $('#taskModal').modal('show');
    });

    $('#exitList').on('click', function () {
      console.log('modal should close');

      $('#taskModal').modal('hide');
    });
  }

  chosenList(selected: any) {
    $('#list').on('click', 'li', function () {
      $('#list li.active').removeClass('active');
      $(this).addClass('active');
    });

    $('#addTask').css('display', 'block')
    console.log(selected);
    var temp = [];
    this.list.forEach((e) => {
      if (e.name == selected) {
        e['task'].forEach((element) => {
          console.log(element.taskName);
          temp.push(element.taskName);
        });
      }
    });
    this.task = temp;
    console.log(this.task);
  }

  displayAddList() {
    this.showAddList = !this.showAddList;
  }

  onSubmit(data: any) {
    console.log(data);
    if(data.listName){
      var temp = {
        name: data.listName,
        task: [],
      };
      this.list.push(temp);
      $('#exampleModal').modal('hide');
    }
    else{
      var test = $('#list').find('li.active span:first').text();
      this.list.forEach(e => {
        if(e.name == test){
          e.task.push({taskName: data.taskName});
        }
      });
      this.chosenList(test);
      console.log(this.list)
      $('#taskModal').modal('hide');
    }

  }

  // onClickSubmit(data) {
  //   console.log( data);
  // }
}
