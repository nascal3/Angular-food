import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  form!: FormGroup
  filterChangeSubscription!: Subscription | undefined

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('')
    })

    this.filterChangeSubscription = this.form.get('search')?.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
      console.log(value)
    })
  }

  ngOnDestroy() {
    if (this.filterChangeSubscription) {
      this.filterChangeSubscription.unsubscribe()
    }
  }
}
