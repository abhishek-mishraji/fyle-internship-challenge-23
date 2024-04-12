// import { TestBed } from '@angular/core/testing';

// import { ApiService } from './api.service';

// describe('ApiService', () => {
//   let service: ApiService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ApiService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });

  it('should fetch public repositories for a user', () => {
    const dummyRepos = [
      { id: 1, name: 'repo1' },
      { id: 2, name: 'repo2' }
    ];

    service.getRepos('testUser').subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(dummyRepos);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/testUser/repos`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);


  });
});