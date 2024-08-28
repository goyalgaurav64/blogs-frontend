import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blogs } from '../../types/blogs';
import { HeaderComponent } from '../header/header.component';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { BlogcardComponent } from '../blogcard/blogcard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, BlogcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  blogService = inject(BlogService);

  //search
  searchTerm: string = '';
  private searchTermSubscription!: Subscription;
  searchService = inject(SearchService);
  filterFeaturedBlogs!: Blogs[];
  featuredBlogs!: Blogs[];

  allBlogs() {
    this.router.navigateByUrl('/blogs');
  }

  ngOnInit(): void {
    this.blogService.getFeaturedBlogs().subscribe((response) => {
      this.filterFeaturedBlogs = response;
      this.featuredBlogs = response;
      console.log(this.featuredBlogs);
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
    console.log('home compo', this.searchTerm);
  }
}
