import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredDisplayComponent } from './filtered-display.component';

describe('FilteredDisplayComponent', () => {
  let component: FilteredDisplayComponent;
  let fixture: ComponentFixture<FilteredDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
