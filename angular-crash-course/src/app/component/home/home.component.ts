import { Component, OnInit } from '@angular/core';
import { COURSES } from '../course-card/course-db';
import { ICourse } from '../course-card/icourse';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  courses: Array<ICourse> = COURSES;
  constructor() { }

  ngOnInit(): void {
  }

}
