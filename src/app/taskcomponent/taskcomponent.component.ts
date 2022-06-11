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
      if(result) {
        console.log('Dialog result: ',result)
      this.tasks.push(result)
      }
    });
  }

  editTaskDialog(index: number) {
    const dialogConfig = new MatDialogConfig();
    let editDialogRef = this.dialog.open(EditTaskDialogComponent, {
      data : { selectedTask : this.tasks[index]}
      });

    editDialogRef.afterClosed().subscribe( result => {
      if(result) {
        console.log('Dialog result: ', result)
      this.tasks[index] = result
      console.log("edited one",this.tasks[index])
      }
    });
  }

  panelOpenState = false;
  tasks = [
    { title:"#98457", summary:"Task 1", description:"1989 is the fifth studio album"},
    { title:"#4759", summary:"Task 2", description:"by American singer-songwriter Taylor Swift"},
    { title:"#24324", summary:"Task 3", description:"It was released on October 27, 2014"},
    { title:"#5234", summary:"Task 4", description:"The album's synth-pop sound is characterized by heavy synthesizers,"}
  ]

  onDeleteTask(index: number) {
    if (index !== -1) {
        this.tasks.splice(index, 1);
  }
}

  ngOnInit(): void {
  }

}
