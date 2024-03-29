import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.css'
})
export class MovieCategoryComponent {
  @Input() title = "";
  @Input() movieList:any[] = [];
}
