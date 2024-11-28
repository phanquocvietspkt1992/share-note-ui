import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:5272/api/Note/search';

  constructor(private http: HttpClient) {}

  searchNotes(key: string): Observable<any[]> {
    const url = `${this.apiUrl}?key=${encodeURIComponent(key)}`;
    return this.http.get<any[]>(url);
  }
}
