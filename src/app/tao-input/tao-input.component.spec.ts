import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoInputComponent } from './tao-input.component';

describe('TaoInputComponent', () => {
  let component: TaoInputComponent;
  let fixture: ComponentFixture<TaoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
