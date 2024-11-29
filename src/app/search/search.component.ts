import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  results: any[] = [];
  constructor(private http: HttpClient) { }
  private searchService = inject(ApiService);
  onSearch2() {
    const url = `http://localhost:5272/api/Note/search?key=${this.query}`;
    this.http.get(url).subscribe((data: any) => { this.results = data; });
  }

  onSearch(): void {
    if (this.query.trim()) {
      this.searchService.searchNotes(this.query).subscribe(
        (data) => {
          this.results = data;
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }
}
