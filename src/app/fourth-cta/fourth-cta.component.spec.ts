import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthCtaComponent } from './fourth-cta.component';

describe('FourthCtaComponent', () => {
  let component: FourthCtaComponent;
  let fixture: ComponentFixture<FourthCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
