import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {
  searchQuery: string = '';
  results: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  onSearch(): void {
    if (!this.searchQuery.trim()) return;

    this.isLoading = true;
    this.apiService.searchNotes(this.searchQuery).subscribe(
      (data) => {
        this.results = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching search results:', error);
        this.isLoading = false;
      }
    );
  }
}
