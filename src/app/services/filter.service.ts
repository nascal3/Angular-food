import {Injectable, signal} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { filterFoodResults } from './results.interface';
import {catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  foodFilterResults = signal<filterFoodResults | null>(null);

  constructor(private http: HttpClient) {}

  filterFood(food: string) {
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'
    this.http.get(`${baseUrl}?apiKey=${API_KEY}&query=${food}`)
      .pipe(
        catchError((error) => {
          console.error('Failed to fetch posts', error)
          return of([])
        })
      )
      .subscribe((data: any  ) => {
        this.foodFilterResults.set((data as filterFoodResults))
    })
  }
}
