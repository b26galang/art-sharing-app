import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'https://localhost:44334/api/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCommentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createComment(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  updateComment(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
