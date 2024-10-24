import {Component, inject, OnInit} from '@angular/core';
import {FilterService} from '../../../services/filter.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-food-results',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './food-results.component.html',
  styleUrl: './food-results.component.scss'
})
export class FoodResultsComponent implements OnInit {

  private filterService = inject(FilterService)

  foodResults$ =  this.filterService.foodFilterResults$

  ngOnInit() {
    this.filterService.filterFood('pasta');
  }
}
