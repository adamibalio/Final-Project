import { Component, OnInit } from '@angular/core';

import { Keeb } from '../keeb';
import { KeebService } from '../keeb.service';

@Component({
  selector: 'app-keebs',
  templateUrl: './keebs.component.html',
  styleUrls: ['./keebs.component.css']
})
export class KeebsComponent implements OnInit {
  keebs: Keeb[] = [];

  constructor(private keebService: KeebService) { }

  ngOnInit(): void {
    this.getKeebs();
  }

  getKeebs(): void {
    this.keebService.getKeebs()
    .subscribe(keebs => this.keebs = keebs);
  }

}
