import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth, IAuthSuccess } from '../models/auth';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private URLServicio: string = environment.URLTienda;
  private _auth: IAuthSuccess | undefined;

  constructor(private http: HttpClient) { }

  get auth(): IAuthSuccess {
    return this._auth ? { ...this._auth! } : JSON.parse(localStorage.getItem('token')!);
  }

  verificarAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return of(true);
  }

  login(header: IAuth): Observable<IAuthSuccess> {
    return this.http.post<IAuthSuccess>(`${this.URLServicio}usuario/login`, header)
      .pipe(
        tap(auth => { this._auth = auth }),
        tap((auth: any) => localStorage.setItem('token', JSON.stringify(auth.usuario[0]))),
      );
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
  }
}
