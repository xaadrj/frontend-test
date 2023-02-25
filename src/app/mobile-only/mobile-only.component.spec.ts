import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOnlyComponent } from './mobile-only.component';

describe('MobileOnlyComponent', () => {
  let component: MobileOnlyComponent;
  let fixture: ComponentFixture<MobileOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
