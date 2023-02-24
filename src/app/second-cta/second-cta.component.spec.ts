import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCtaComponent } from './second-cta.component';

describe('SecondCtaComponent', () => {
  let component: SecondCtaComponent;
  let fixture: ComponentFixture<SecondCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
