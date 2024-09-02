import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Categories } from '../types/categories';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpClient = inject(HttpClient);

  constructor(private http: HttpClient) { }

  getCategoryList(){
    return this.http.get<Categories[]>(environment.API_URL+"/api/Category");
  }
}
