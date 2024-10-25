import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import {HeaderComponent} from './components/header/header.component'
import {NgIf} from '@angular/common';
import {FoodResultsComponent} from './components/food/food-results/food-results.component'
import {FoodComponent} from './components/food/food.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgIf, FoodComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-angular';
}
