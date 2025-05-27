import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  private readonly builder = inject(FormBuilder)
  movieForm = this.builder.group({
    title: [''],
    year: [new Date().getFullYear()]
  })

  ngOnInit(): void {
    this.movieForm.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value)
    })
  }
}
