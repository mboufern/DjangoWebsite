import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  private apiUrl = 'http://localhost:8000/api/tableaux/';

  constructor(private http: HttpClient) {}

  getTableaux(page: number = 1): Observable<any> {
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<any>(this.apiUrl, { params });
  }

  getTableau(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  createTableau(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateTableau(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, data);
  }

  deleteTableau(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
