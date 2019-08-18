import { Component, Renderer2, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidenavService } from './sidenav.service';
import { BreakpointService } from '../../services/breakpoint/breakpoint.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;
  private _theme: string;

  constructor(
    public sidenavService: SidenavService,
    public bp: BreakpointService,
    private _overlayContainer: OverlayContainer,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
  }

  ngOnInit(): void {
    this.setTheme('light-theme');
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenav = this.sidenav;
  }

  toggleTheme(event: MatSlideToggleChange): void {
    this.setTheme(event.checked ? 'dark-theme' : 'light-theme');
  }

  setTheme(theme: string) {
    if (this._theme) {
      this._renderer.removeClass(this._document.body, this._theme);
      this._renderer.removeClass(this._overlayContainer.getContainerElement(), this._theme);
    }
    this._theme = theme;
    this._renderer.addClass(this._document.body, theme);
    this._renderer.addClass(this._overlayContainer.getContainerElement(), theme);
  }

}
