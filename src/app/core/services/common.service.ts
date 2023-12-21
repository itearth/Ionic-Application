import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(url).pipe(
      tap((res) => console.log('Posts API Response:', res))
    );
  }

  getPostById(postId: number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.http.get<any>(url);
  }

  getComments(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get<any>(url).pipe(
      tap((res) => console.log('Comments API Response:', res))
    );
  }
}
