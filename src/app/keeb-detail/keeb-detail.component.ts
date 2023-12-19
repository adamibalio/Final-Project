import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Keeb } from '../keeb';
import { KeebService } from '../keeb.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-keeb-detail',
  templateUrl: './keeb-detail.component.html',
  styleUrls: [ './keeb-detail.component.css' ]
})
export class KeebDetailComponent implements OnInit {
  keeb: Keeb | undefined;

  constructor(
    private route: ActivatedRoute,
    private keebService: KeebService,
    private location: Location,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getKeeb();
  }

  getKeeb(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.keebService.getKeeb(id)
      .subscribe(keeb => this.keeb = keeb);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(keeb: Keeb) {
    this.cartService.addToCart(keeb);
    window.alert('Your product has been added to the cart!');
  }

}