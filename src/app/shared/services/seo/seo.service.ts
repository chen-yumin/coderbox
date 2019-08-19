import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  readonly siteName: string = 'CoderBox';

  constructor(
    private _title: Title,
    private _meta: Meta,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  setupMetaUpdate() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      ).subscribe((data) => {
        if (data.title) {
          this._title.setTitle(`${data.title} - ${this.siteName}`);
        } else {
          this._title.setTitle(this.siteName);
        }
        if (data.meta) {
          this._meta.addTags(data.meta);
        }
      });
  }
}
