import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteComponent } from './book-delete.component';

describe('BookDeleteComponent', () => {
  let component: BookDeleteComponent;
  let fixture: ComponentFixture<BookDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
