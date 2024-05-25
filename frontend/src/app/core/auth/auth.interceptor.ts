import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { ProjetService } from '../services/projet.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _projetService: ProjetService
    ) {}

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Clone the request object
        let newReq = req.clone();

        // Request
        //
        // If the access token didn't expire, add the Authorization header.
        // We won't add the Authorization header if the access token expired.
        // This will force the server to return a "401 Unauthorized" response
        // for the protected API routes which our response interceptor will
        // catch and delete the access token from the local storage while logging
        // the user out from the app.
        if (this._authService.accessToken &&!AuthUtils.isTokenExpired(this._authService.accessToken)) {
            newReq = req.clone({
                headers: req.headers.set('Authorization','Bearer ' + this._authService.accessToken)
                    .set('projet_id', this._projetService.projet.id + ''),
            });

            if (this._projetService.projet && this._projetService.projet.id) {
                newReq = newReq.clone({
                    headers: newReq.headers
                        .set('projet_id', this._projetService.projet.id + '')
                        .set('projet_id', this._projetService.projet.id + ''),
                });
            }
        }

        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {
                // Catch "401 Unauthorized" responses
                if (error instanceof HttpErrorResponse) {
                    if ([401, 403].indexOf(error.status) !== -1) {
                        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                        this._authService.signOut();
                    }
                    // Sign out
                    // this._authService.signOut();

                    // Reload the app
                    // location.reload();
                }

                return throwError(error);
            })
        );
    }
}
