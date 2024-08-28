import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blogs } from '../../types/blogs';

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

  ngOnInit(): void {}
}
