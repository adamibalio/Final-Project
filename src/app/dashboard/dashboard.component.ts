import { Component, OnInit } from '@angular/core';
import { Keeb } from '../keeb';
import { KeebService } from '../keeb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  keebs: Keeb[] = [];

  constructor(private keebService: KeebService) { }

  ngOnInit(): void {
    this.getKeebs();
  }

  getKeebs(): void {
    this.keebService.getKeebs()
      .subscribe(keebs => this.keebs = keebs.slice(1, 5));
  }
}