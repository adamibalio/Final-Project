import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Keeb } from '../keeb';
import { KeebService } from '../keeb.service';

@Component({
  selector: 'app-keeb-search',
  templateUrl: './keeb-search.component.html',
  styleUrls: [ './keeb-search.component.css' ]
})
export class KeebSearchComponent implements OnInit {
  keebs$!: Observable<Keeb[]>;
  private searchTerms = new Subject<string>();

  constructor(private keebService: KeebService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.keebs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.keebService.searchKeebs(term)),
    );
  }

}