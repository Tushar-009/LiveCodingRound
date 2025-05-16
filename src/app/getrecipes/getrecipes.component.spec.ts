import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrecipesComponent } from './getrecipes.component';

describe('GetrecipesComponent', () => {
  let component: GetrecipesComponent;
  let fixture: ComponentFixture<GetrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
