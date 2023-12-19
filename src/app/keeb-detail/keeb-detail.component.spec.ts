import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeebDetailComponent } from './keeb-detail.component';

describe('KeebDetailComponent', () => {
  let component: KeebDetailComponent;
  let fixture: ComponentFixture<KeebDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeebDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeebDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
