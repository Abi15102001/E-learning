import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { blogs } from 'src/app/Modal-classes/blogs.modal';

@Component({
  selector: 'app-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.css']
})
export class BlogItemsComponent {
  blogsList:blogs[] =[];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs() {
    this.httpClient.get('assets/data/blogs.json').subscribe({
      next: (blogs) => {
         this.blogsList=blogs as blogs[];
      },
      error: (errors) => {
        console.log(errors);  
      }    
    })
  }  
}
