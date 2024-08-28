import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Blogs } from '../../types/blogs';
import { BlogService } from '../../services/blog.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);
  blog!: Blogs;

  ngOnInit(): void {
    let blogId = this.activatedRoute.snapshot.params['id'];
    this.blogService.getBlogById(blogId).subscribe((response) => {
      this.blog = response;
    });
  }
}
