import { TestBed } from '@angular/core/testing';

import { ShanksUiService } from './shanks-ui.service';

describe('ShanksUiService', () => {
  let service: ShanksUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShanksUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
