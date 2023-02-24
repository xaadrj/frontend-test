import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCtaComponent } from './third-cta.component';

describe('ThirdCtaComponent', () => {
  let component: ThirdCtaComponent;
  let fixture: ComponentFixture<ThirdCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
