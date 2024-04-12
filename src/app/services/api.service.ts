// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { tap, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(
//     private httpClient: HttpClient
//   ) { }

//   getUser(githubUsername: string) {
//     return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
//   }

//   // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string, page: number = 1, per_page: number = 10): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`);
  }
}