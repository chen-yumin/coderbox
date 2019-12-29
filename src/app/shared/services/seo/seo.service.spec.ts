import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SEOService } from './seo.service';

describe('SEOService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: SEOService = TestBed.get(SEOService);
    expect(service).toBeTruthy();
  });
});
