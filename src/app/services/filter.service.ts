import {Injectable, signal} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { filterFoodResults, food } from './results.interface';
import {BehaviorSubject, catchError, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private foodFilterResultsSubject =  new BehaviorSubject<food[]>([])

  foodFilterResults$ = this.foodFilterResultsSubject.asObservable();

  constructor(private http: HttpClient) {}

  filterFood(food: string) {
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'
    this.http.get<any>(`${baseUrl}?apiKey=${API_KEY}&query=${food}`)
      .pipe(
        catchError((error) => {
          console.error('Failed to fetch posts', error)
          return of([])
        })
      )
      .subscribe((data: filterFoodResults  ) => {
        this.foodFilterResultsSubject.next(data.results)
    })
  }
}
