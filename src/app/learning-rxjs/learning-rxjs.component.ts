import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, of, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-learning-rxjs',
  templateUrl: './learning-rxjs.component.html',
  styleUrls: ['./learning-rxjs.component.css'],
})
export class LearningRxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.newSubject();
    // this.newStream();
  }

  newStream() {
    let myStream = from(['1', '2', '3', '4', 'Azhar', '11', '12', '13', '14']);

    myStream
      .pipe(
        map((item) => parseInt(item)),

        map((item) => {
          if (isNaN(item)) {
            throw new Error(
              'We have NaN Bro, Something aint right in the stream'
            );
          }
          return parseInt(item as any);
        }),
        catchError((error) => {
          // return of('From Error ');
          return throwError(() =>  error);
        })
      )

      .subscribe((data) => {
        console.log('data is here', data);
      });
  }

  newSubject() {
    let myStream = new Subject();

    myStream.subscribe({
      next: (data) => {
        console.log('>>>>>>>>>>', data);
      },
      complete: () => {
        console.log('>>>>>>>>>> Completed <<<<<<<');
      },
      error: () => {
        console.error('Error Bro in Ur Observable');
      },
    });

    myStream.next('Azhar');
    myStream.next('John');
    myStream.next('Ganga');

    //myStream.complete();
    myStream.next('More Value');

    myStream.complete();
  }
}
