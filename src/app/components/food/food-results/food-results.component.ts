import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FilterService} from '../../../services/filter.service';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-food-results',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe,
    NgOptimizedImage,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatButton
  ],
  templateUrl: './food-results.component.html',
  styleUrl: './food-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodResultsComponent implements OnInit {

  private filterService = inject(FilterService)

  foodResults$ =  this.filterService.foodFilterResults$

  ngOnInit() {
    this.filterService.filterFood('pasta')
  }

  viewFood(id: number) {
    this.filterService.getFoodDetails(id)
  }
}
