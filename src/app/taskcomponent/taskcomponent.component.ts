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
    { title:"Task1", summary:"This is task1", description:"1989 is the fifth studio album"},
    { title:"Task2", summary:"This is task2", description:"by American singer-songwriter Taylor Swift"},
    { title:"Task3", summary:"This is task3", description:"It was released on October 27, 2014"},
    { title:"Task4", summary:"This is task4", description:"The album's synth-pop sound is characterized by heavy synthesizers,"}
  ]
  ngOnInit(): void {
  }

}
