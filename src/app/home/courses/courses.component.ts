import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { course } from 'src/app/Modal-classes/course.modal';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  coursesList:course[] =[];
  filteredCoursesList:course[] =[];
  categories: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses() {
    this.httpClient.get('assets/data/courses.json').subscribe({
      next: (input) => {
        this.coursesList=input as course[];
        console.log(this.coursesList);
        this.filteredCoursesList =input as course[];
        console.log(this.filteredCoursesList);
        this.getCategories()
        console.log(this.categories);
      },
      error: (errors) => {
        console.log(errors); 
      }    
    })
  } 
  getCategories() {
    this.categories = this.filteredCoursesList.map((course) => { return course.category })
    this.categories = [...new Set(this.categories)]
  }
  
  filterCourses(category:string){
    this.filteredCoursesList = this.coursesList.filter((course=>course.category ===category))
      
  }
  
}
