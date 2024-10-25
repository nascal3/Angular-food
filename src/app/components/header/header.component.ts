import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core'
import {MatFormField} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {debounceTime, map, Observable, Subscription} from 'rxjs';
import {FilterService} from '../../services/filter.service'
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy{
  form!: FormGroup
  filterChangeSubscription!: Subscription | undefined

  private filterService = inject(FilterService)

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('')
    })

    this.filterChangeSubscription = this.form.get('search')?.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        this.filterService.filterFood(value)
    })
  }

  ngOnDestroy() {
    if (this.filterChangeSubscription) {
      this.filterChangeSubscription.unsubscribe()
    }
  }
}
