import { Injectable, Inject, Renderer2, RendererFactory2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isdarkTheme: boolean;
  private renderer: Renderer2;
  public themeMatcher: MediaQueryList;

  constructor(
    private mediaMatcher: MediaMatcher,
    private overlayContainer: OverlayContainer,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.themeMatcher = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)');
    if (isPlatformBrowser(this.platformId)) {
      // Only set initial dark theme on browser
      // On SSR, this is always false, thus always adding `light-theme` and
      // causing the initial view to flash from light to dark
      this.darkTheme = this.themeMatcher.matches;
    }
    this.themeMatcher.addListener((event: MediaQueryListEvent) => {
      this.darkTheme = event.matches;
    });
  }

  get darkTheme(): boolean {
    return this.isdarkTheme;
  }

  set darkTheme(darkTheme: boolean) {
    this.cleanThemes();
    this.isdarkTheme = darkTheme;
    this.renderer.addClass(this.document.body, this.getThemeName(darkTheme));
    this.renderer.addClass(this.overlayContainer.getContainerElement(),
      this.getThemeName(darkTheme));
  }

  cleanThemes(): void {
    this.renderer.removeClass(this.document.body, 'light-theme');
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.overlayContainer.getContainerElement(), 'light-theme');
    this.renderer.removeClass(this.overlayContainer.getContainerElement(), 'dark-theme');
  }

  getThemeName(darkTheme: boolean) {
    return darkTheme ? 'dark-theme' : 'light-theme';
  }

}
