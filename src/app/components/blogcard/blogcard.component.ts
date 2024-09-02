import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blogs } from '../../types/blogs';
import { Categories } from '../../types/categories';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-blogcard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.css',
})
export class BlogcardComponent implements OnInit {
  @Input() blogs!: Blogs[];

  router = inject(Router);
  blogService = inject(BlogService);

  categoriesList : Categories[] = [];
  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((response) => {
      this.categoriesList = response;
    });
  }

  getBlogCategory(blogCategoryId:number){
    return this.categoriesList.find(cat => cat.id == blogCategoryId)?.name;
  }
}
