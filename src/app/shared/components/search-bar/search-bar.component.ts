// src/app/shared/components/search-bar/search-bar.component.ts

import { Component, input, output, OnInit, OnDestroy, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputComponent } from '../input/input.component';
import { SearchBarButton } from './search-bar.types';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  placeholder = input<string>('Search...');
  debounceTimeMs = input<number>(300);
  buttons = input<SearchBarButton[]>([]);

  search = output<string>();
  buttonClick = output<string>();

  protected readonly searchControl = new FormControl('');

  private readonly searchSubject$ = new Subject<string>();

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.searchSubject$.next(value || '');
    });

    this.searchSubject$
      .pipe(
        debounceTime(this.debounceTimeMs()),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((query) => {
        this.search.emit(query.trim());
      });
  }

  protected onButtonClick(buttonKey: string): void {
    this.buttonClick.emit(buttonKey);
  }

  protected clearSearch(): void {
    this.searchControl.setValue('');
  }
}
