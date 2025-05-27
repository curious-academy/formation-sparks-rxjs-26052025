import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregatorsComponent } from './agregators.component';

describe('AgregatorsComponent', () => {
  let component: AgregatorsComponent;
  let fixture: ComponentFixture<AgregatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
