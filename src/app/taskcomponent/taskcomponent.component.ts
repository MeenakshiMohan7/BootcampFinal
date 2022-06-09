import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.scss']
})
export class TaskcomponentComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  tasks = [
    "Task1",
    "Task2",
    "Task3",
    "Task4"
  ]
  ngOnInit(): void {
  }

}
