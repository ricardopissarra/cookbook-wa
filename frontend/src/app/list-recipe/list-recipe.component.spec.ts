import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecipeComponent } from './list-recipe.component';

describe('ListRecipeComponent', () => {
  let component: ListRecipeComponent;
  let fixture: ComponentFixture<ListRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
