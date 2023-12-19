import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeebsComponent } from './keebs.component';

describe('KeebsComponent', () => {
  let component: KeebsComponent;
  let fixture: ComponentFixture<KeebsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeebsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
