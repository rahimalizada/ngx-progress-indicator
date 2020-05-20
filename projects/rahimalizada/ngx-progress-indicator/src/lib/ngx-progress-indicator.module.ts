import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProgressIndicatorInterceptor } from './progress-indicator.interceptor';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ProgressIndicatorInterceptor,
      multi: true,
    },
  ],
})
export class NgxProgressIndicatorModule {}
