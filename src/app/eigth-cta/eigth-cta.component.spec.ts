import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EigthCtaComponent } from './eigth-cta.component';

describe('EigthCtaComponent', () => {
  let component: EigthCtaComponent;
  let fixture: ComponentFixture<EigthCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EigthCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EigthCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
