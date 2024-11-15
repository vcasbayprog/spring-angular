import { TestBed } from '@angular/core/testing';

import { BookCreateService } from './book-create.service';

describe('BookCreateService', () => {
  let service: BookCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
