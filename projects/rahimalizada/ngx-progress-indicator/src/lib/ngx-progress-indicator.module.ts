import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProgressIndicatorDirective } from './progress-indicator.directive';
import { ProgressIndicatorInterceptor } from './progress-indicator.interceptor';

@NgModule({
  declarations: [ProgressIndicatorDirective],
  imports: [],
  exports: [ProgressIndicatorDirective],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ProgressIndicatorInterceptor,
      multi: true,
    },
  ],
})
export class NgxProgressIndicatorModule {}
