import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { BookResponse, SearchBookResponse } from 'src/app/core/models/book-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {

  constructor(private apiService: ApiService) {}

  getAllBooks(searchName: string,page: number ): Observable<SearchBookResponse> {
    const limit = 10;
    return this.apiService.get(`/search.json?q=${searchName}&page=${page}&limit=${limit}`);
  }
}
