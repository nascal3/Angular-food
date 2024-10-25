import { Component, inject } from '@angular/core'
import { FilterService } from '../../../services/filter.service'
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    MatCardHeader,
    MatCardTitle,
    MatCard,
    NgForOf
  ],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss'
})
export class FoodDetailsComponent {

  private filterService = inject(FilterService)

  foodDetails$ =  this.filterService.foodDetails$
}
