import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageGraphicsComponent } from './homepage-graphics.component';

describe('HomepageGraphicsComponent', () => {
  let component: HomepageGraphicsComponent;
  let fixture: ComponentFixture<HomepageGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageGraphicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
