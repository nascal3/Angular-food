import { Component } from '@angular/core'
import {FoodResultsComponent} from './food-results/food-results.component'
import {FoodDetailsComponent} from './food-details/food-details.component'

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [FoodResultsComponent, FoodDetailsComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

}
