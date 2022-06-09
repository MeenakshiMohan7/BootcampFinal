import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';

@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.scss']
})
export class TaskcomponentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openNewTaskDialog() {
    let newTaskDialogRef = this.dialog.open(NewTaskDialogComponent);

    newTaskDialogRef.afterClosed().subscribe( result => {
      console.log('Dialog result: ', result)
    });
  }

  editTaskDialog() {
    const dialogConfig = new MatDialogConfig();
    let editDialogRef = this.dialog.open(EditTaskDialogComponent, {
      data : {taskName: 'Edit me!'}
      });

    editDialogRef.afterClosed().subscribe( result => {
      console.log('Dialog result: ', result)
    });
  }

  panelOpenState = false;
  tasks = [
    { title:"Task1", summary:"This is task1", description:"1989 is the fifth studio album"},
    { title:"Task2", summary:"This is task2", description:"by American singer-songwriter Taylor Swift"},
    { title:"Task3", summary:"This is task3", description:"It was released on October 27, 2014"},
    { title:"Task4", summary:"This is task4", description:"The album's synth-pop sound is characterized by heavy synthesizers,"}
  ]

  onDeleteTask(index: number) {
    if (index !== -1) {
        this.tasks.splice(index, 1);
  }
}
  ngOnInit(): void {
  }

}
