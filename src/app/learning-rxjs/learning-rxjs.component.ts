import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs',
  templateUrl: './learning-rxjs.component.html',
  styleUrls: ['./learning-rxjs.component.css'],
})
export class LearningRxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let myStream = new Subject();

    myStream.subscribe({
      next : (data) => {
        console.log('>>>>>>>>>>', data);
      },
      complete : () => {
        console.log('>>>>>>>>>> Completed <<<<<<<');
      },
      error : () => {
        console.error('Error Bro in Ur Observable');
      }
    });

    myStream.next('Azhar');
    myStream.next('John');
    myStream.next('Ganga');

    //myStream.complete();
    myStream.next('More Value');


    myStream.complete();
  }
}
