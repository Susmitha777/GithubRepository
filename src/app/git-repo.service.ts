import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  private readonly apiUrl = 'https://api.github.com/repositories';
 

  constructor(private http: HttpClient) {}
  getRepos() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }
}
