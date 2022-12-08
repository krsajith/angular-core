import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomParentComponent } from './custom-parent.component';

describe('CustomParentComponent', () => {
  let component: CustomParentComponent;
  let fixture: ComponentFixture<CustomParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
