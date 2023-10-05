import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanksUiComponent } from './shanks-ui.component';

describe('ShanksUiComponent', () => {
  let component: ShanksUiComponent;
  let fixture: ComponentFixture<ShanksUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShanksUiComponent]
    });
    fixture = TestBed.createComponent(ShanksUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
