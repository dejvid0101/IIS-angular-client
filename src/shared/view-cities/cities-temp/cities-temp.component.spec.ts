import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTempComponent } from './cities-temp.component';

describe('CitiesTempComponent', () => {
  let component: CitiesTempComponent;
  let fixture: ComponentFixture<CitiesTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
