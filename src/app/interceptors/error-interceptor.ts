import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ErrorService } from '../services/error-service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errors = inject(ErrorService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse)=> {
      errors.show(statusMsg(err.status));
      //Rethrow so service can still react to it
      return throwError(() => err);
    }),
  );
};

function statusMsg(status: number): string {
  if (status === 0) {
    return "Network or browser blocked request";
  }
  if (status === 404) {
    return "Nothing found"
  }
  if (status === 500) {
    return "The server had a problem"
  }
  return "Something went wrong: (error code " + status + ")";
}
