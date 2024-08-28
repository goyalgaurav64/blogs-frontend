import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText!: string;

  searchService = inject(SearchService);

  //constructor(private searchService: SearchService){}
  handleSearch() {
    //console.log(this.searchText);
    this.searchService.setSearchTerm(this.searchText);
  }
}
