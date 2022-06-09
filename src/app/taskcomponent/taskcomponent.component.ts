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

  editTaskDialog(index: number) {
    const dialogConfig = new MatDialogConfig();
    let editDialogRef = this.dialog.open(EditTaskDialogComponent, {
      // data : {taskName: '#TOM167'}
      data : { selectedTask : this.tasks[index]}
      });
    // console.log("index: ",index,"array : ",this.tasks[index].title)
    editDialogRef.afterClosed().subscribe( result => {
      console.log('Dialog result: ', result)
    });
  }

  panelOpenState = false;
  tasks = [
    { title:"#98457", summary:"This is task", description:"1989 is the fifth studio album"},
    { title:"#4759", summary:"This is task", description:"by American singer-songwriter Taylor Swift"},
    { title:"#24324", summary:"This is task", description:"It was released on October 27, 2014"},
    { title:"#5234", summary:"This is task", description:"The album's synth-pop sound is characterized by heavy synthesizers,"}
  ]

  onDeleteTask(index: number) {
    if (index !== -1) {
        this.tasks.splice(index, 1);
  }
}

  ngOnInit(): void {
  }

}
