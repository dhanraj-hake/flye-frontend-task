import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';
import { Book } from 'src/app/core/models/book-response.model';
import { SearchBookService } from 'src/app/core/services/searchbook.service';

@Component({
  selector: 'search-trending-subjects',
  templateUrl: './search-subjects.component.html',
  styleUrls: ['./search-subjects.component.scss'],
})
export class SearchSubjectsComponent implements OnInit {

  isLoading: boolean = true;

  subjectName: string = '';

  allBooks: Book[] = [];

  pageNumber : number = 1;

  totoalResults: number =0;

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SearchBookService
  ) {}

  getAllBooks() {
    this.subjectsService.getAllBooks(this.subjectName, this.pageNumber).subscribe((data) => {
      this.allBooks = data?.docs;
      // this.subjectsArray = data;
      this.isLoading = false;
      console.log(data)
      this.totoalResults =  data?.numFound;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name') || '';
      this.isLoading = true;
      this.getAllBooks();
    });
  }



  prevPage(): void {
    this.pageNumber -=1;
    this.isLoading = true;
    this.getAllBooks();
  }
  
  nextPage(): void {
    this.pageNumber +=1;
    this.isLoading = true;
    this.getAllBooks();

  }

}
