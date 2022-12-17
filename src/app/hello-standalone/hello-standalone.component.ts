import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-hello-standalone',
  standalone: true,
  imports: [CommonModule, HttpClientModule, OverlayModule],
  templateUrl: './hello-standalone.component.html',
  styleUrls: ['./hello-standalone.component.css']
})
export class HelloStandaloneComponent implements OnInit {
  data: any;

  isOpen = false;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe().subscribe(data => {
        this.data = data;
      })
  }

  trackByFn(item:any) {
    return item.id
  }
}
