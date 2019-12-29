import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { BreakpointService } from '../../services/breakpoint/breakpoint.service';
import { ThemeService } from '../../services/theme/theme.service';
import { MatSidenav } from '@angular/material/sidenav';
import {
  MatSlideToggle,
  MatSlideToggleChange
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  isDarkTheme: boolean;
  @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;
  @ViewChild('themeToggle', { static: false })
  public themeToggle: MatSlideToggle;

  constructor(
    public sidenavService: SidenavService,
    public bp: BreakpointService,
    private themeService: ThemeService
  ) {
    this.isDarkTheme = this.themeService.darkTheme;
  }

  ngOnInit() {
    this.themeService.themeMatcher.addListener((event: MediaQueryListEvent) => {
      if (this.isDarkTheme != event.matches) {
        this.themeToggle.toggle();
        this.themeToggle.focus();
      }
    });
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenav = this.sidenav;
  }

  toggleTheme(event: MatSlideToggleChange): void {
    this.themeService.darkTheme = event.checked;
  }
}
