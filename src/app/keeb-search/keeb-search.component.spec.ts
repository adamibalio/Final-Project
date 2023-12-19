import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeebSearchComponent } from './keeb-search.component';

describe('KeebSearchComponent', () => {
  let component: KeebSearchComponent;
  let fixture: ComponentFixture<KeebSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeebSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeebSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
