import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private xsmall$: Observable<boolean>;
  private small$: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.xsmall$ = breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map(state => state.matches));

    this.small$ = breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map(state => state.matches));
  }

  public get isXSmall(): Observable<boolean> {
    return this.xsmall$;
  }

  public get isSmall(): Observable<boolean> {
    return this.small$;
  }
}
