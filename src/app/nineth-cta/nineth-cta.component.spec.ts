import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinethCtaComponent } from './nineth-cta.component';

describe('NinethCtaComponent', () => {
  let component: NinethCtaComponent;
  let fixture: ComponentFixture<NinethCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinethCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinethCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
