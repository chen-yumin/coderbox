import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _sidenav: MatSidenav;
  private sub: Subject<MatSidenav> = new Subject();

  public set sidenav(sidenav: MatSidenav) {
    this._sidenav = sidenav;
    this.sub.next(sidenav);
  }

  public get sidenav(): MatSidenav {
    return this._sidenav;
  }

  public get sidenav$(): Observable<MatSidenav> {
    return this.sub;
  }
}
