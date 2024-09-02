import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Blogs } from '../../types/blogs';
import { BlogService } from '../../services/blog.service';
import { UpperCasePipe } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Categories } from '../../types/categories';

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
  categoryService = inject(CategoryService);
  
  blog!: Blogs;

  categoryList:Categories[] = [];
  blogCategory!: any;

  ngOnInit(): void {
    let blogId = this.activatedRoute.snapshot.params['id'];
    this.blogService.getBlogById(blogId).subscribe((response) => {
      this.blog = response;
    });

    this.categoryService.getCategoryList().subscribe((response) => {
      this.categoryList = response;
    });

    // this.blogCategory = this.getCategoryName();
  }

  getCategoryName(){
    return this.categoryList.find(cat => cat.id == this.blog.categoryId)?.name;
  }
}
