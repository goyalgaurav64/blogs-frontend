import { Component, inject, OnInit } from '@angular/core';
import { Blogs } from '../../types/blogs';
import { BlogService } from '../../services/blog.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { BlogcardComponent } from '../blogcard/blogcard.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink, BlogcardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  searchTerm: string = '';
  private searchTermSubscription!: Subscription;
  searchService = inject(SearchService);

  allBlogs: Blogs[] = [];
  blogService = inject(BlogService);

  ngOnInit(): void {
    // GET ALL BLOGS
    debugger
    this.blogService.getAllBlogs().subscribe((response) => {
      this.allBlogs = response;
      console.log(this.allBlogs);
    });

    this.searchTermSubscription = this.searchService.searchTerm$.subscribe(
      (term) => {
        this.searchTerm = term;
        this.performSearch();
      }
    );
  }

  ngOnDestroy() {
    this.searchTerm = '';
    this.searchTermSubscription.unsubscribe();
  }

  performSearch() {
    console.log('blogs compo', this.searchTerm);
  }
}
