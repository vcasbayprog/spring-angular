import { TestBed } from '@angular/core/testing';

import { BookDeleteService } from './book-delete.service';

describe('BookDeleteService', () => {
  let service: BookDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
