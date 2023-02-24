import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCtaComponent } from './first-cta.component';

describe('FirstCtaComponent', () => {
  let component: FirstCtaComponent;
  let fixture: ComponentFixture<FirstCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
