import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Blogs } from '../types/blogs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService implements OnInit {
  httpClient = inject(HttpClient);
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getFeaturedBlogs() {
    return this.http.get<Blogs[]>(environment.API_URL+'/api/Blog/featured');
  }

  getBlogById(blogId: number) {
    return this.http.get<Blogs>(environment.API_URL+'/api/Blog/' + blogId);
  }

  getAllBlogs() {
    return this.http.get<Blogs[]>(environment.API_URL+'/api/Blog/blogs');
  }
}
