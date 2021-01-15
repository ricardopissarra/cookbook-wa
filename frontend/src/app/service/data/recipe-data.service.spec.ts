import { TestBed } from '@angular/core/testing';

import { RecipeDataService } from './recipe-data.service';

describe('RecipeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeDataService = TestBed.get(RecipeDataService);
    expect(service).toBeTruthy();
  });
});
