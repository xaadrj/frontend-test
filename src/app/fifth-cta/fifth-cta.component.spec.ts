import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthCtaComponent } from './fifth-cta.component';

describe('FifthCtaComponent', () => {
  let component: FifthCtaComponent;
  let fixture: ComponentFixture<FifthCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
