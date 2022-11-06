import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-standalone.component.html',
  styleUrls: ['./hello-standalone.component.css']
})
export class HelloStandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
