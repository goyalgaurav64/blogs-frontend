import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Blogs } from '../types/blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogService implements OnInit {
  httpClient = inject(HttpClient);
  private blogsApi = "https://localhost:7241";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getFeaturedBlogs() {
    return this.http.get<Blogs[]>(this.blogsApi+'/api/Blog/featured');
  }

  getBlogById(blogId: number) {
    return this.http.get<Blogs>(this.blogsApi+'/api/Blog/' + blogId);
  }

  getAllBlogs() {
    return this.http.get<Blogs[]>(this.blogsApi+'/api/Blog/blogs');
  }
}
