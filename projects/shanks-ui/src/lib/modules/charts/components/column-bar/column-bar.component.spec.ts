import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBarComponent } from './column-bar.component';

describe('ColumnBarComponent', () => {
  let component: ColumnBarComponent;
  let fixture: ComponentFixture<ColumnBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnBarComponent]
    });
    fixture = TestBed.createComponent(ColumnBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
