import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
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

  constructor(
    private sidenavService: SidenavService,
    private bp: BreakpointService,
    private overlayContainer: OverlayContainer
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
    this.setThemeForClassList(document.documentElement.classList, theme);
    this.setThemeForClassList(this.overlayContainer.getContainerElement()
      .classList, theme);
  }

  private setThemeForClassList(classList: DOMTokenList, theme: string) {
    const themeClasses = Array.from(classList)
      .filter((item: string) => item.includes('-theme'));
    if (themeClasses.length > 0) {
      classList.remove(...themeClasses);
    }
    classList.add(theme);
  }

}
