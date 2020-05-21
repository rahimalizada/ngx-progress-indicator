import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProgressIndicatorInterceptor implements HttpInterceptor {
  private progressSubject = new BehaviorSubject(0);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.progressSubject.next(this.progressSubject.value + 1);
    return next.handle(request).pipe(
      finalize(() => {
        this.progressSubject.next(
          this.progressSubject.value < 1 ? 0 : this.progressSubject.value - 1
        );
      })
    );
  }

  get getProgressSubject() {
    return this.progressSubject;
  }
}
