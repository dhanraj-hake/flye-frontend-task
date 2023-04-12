import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSubjectsComponent } from './search-subjects.component';

describe('SearchSubjectsComponent', () => {
  let component: SearchSubjectsComponent;
  let fixture: ComponentFixture<SearchSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSubjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
