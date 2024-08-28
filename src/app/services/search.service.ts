import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  setSearchTerm(text: string) {
    // storing the value using next
    // wherever we want to use this value, we have to subscribe to observable,
    //here the observable is searchTerm$
    this.searchTermSubject.next(text);
  }
}
