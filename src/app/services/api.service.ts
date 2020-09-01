import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  throwError(): Observable<never> {
    throw new Error('Boom!');
  }


  

  getPost(): Observable<Post> {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.http
      .get<Post>(url)
      .pipe(catchError(() => throwError('Failed requesting access code')));
  }
}
