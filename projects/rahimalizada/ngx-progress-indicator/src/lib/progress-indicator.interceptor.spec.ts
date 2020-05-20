import { TestBed } from '@angular/core/testing';

import { ProgressIndicatorInterceptor } from './progress-indicator.interceptor';

describe('ProgressIndicatorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProgressIndicatorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProgressIndicatorInterceptor = TestBed.inject(ProgressIndicatorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
