import {Injectable, signal} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { filterFoodResults, food } from './results.interface';
import {BehaviorSubject, catchError, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private foodFilterResultsSubject =  new BehaviorSubject<food[]>([])
  private foodDetailsSubject =  new BehaviorSubject<any>(null)

  foodFilterResults$ = this.foodFilterResultsSubject.asObservable();
  foodDetails$ = this.foodDetailsSubject.asObservable();

  constructor(private http: HttpClient) {}

  filterFood(food: string) {
    // const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    // const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'
    this.http.get<any>(`${environment.apiUrl}/complexSearch?apiKey=${environment.API_KEY}&query=${food}`)
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

  getFoodDetails(id: number) {
    // const baseUrl = 'https://api.spoonacular.com/recipes/'
    // const API_KEY = 'ae9acc90cbe842faa02e9cc3b209ac51'

    const url = `${environment.apiUrl}/${id}/information?apiKey=${environment.API_KEY}`
    this.http.get<any>(url)
      .pipe(
        catchError((error) => {
          console.error('Failed to fetch food details', error)
          return of([])
        })
      )
      .subscribe((data: any) => {
        this.foodDetailsSubject.next(data)
    })
  }
}
