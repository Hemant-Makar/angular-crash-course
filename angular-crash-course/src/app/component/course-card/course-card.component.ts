import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from './icourse';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: ICourse;
  constructor() { }

  ngOnInit(): void {
  }

}
