import { Injectable, Inject, Renderer2, RendererFactory2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme: boolean;
  private renderer: Renderer2;
  public themeMatcher: MediaQueryList;

  constructor(
    private mediaMatcher: MediaMatcher,
    private overlayContainer: OverlayContainer,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.themeMatcher = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)');
    if (isPlatformBrowser(this.platformId)) {
      // Only set initial dark theme on browser
      // On SSR, this is always false, thus adding `light-theme` on body tag
      // causing the initial view to flash from light to dark
      this.isDarkTheme = this.themeMatcher.matches;
    }
    this.themeMatcher.addListener((event: MediaQueryListEvent) => {
      this.isDarkTheme = event.matches;
    });
  }

  get isDarkTheme(): boolean {
    return this.darkTheme;
  }

  set isDarkTheme(darkTheme: boolean) {
    if (this.darkTheme) {
      if (this.darkTheme === darkTheme) return;
      this.renderer.removeClass(this.document.body, this.getThemeName(this.darkTheme));
      this.renderer.removeClass(this.overlayContainer.getContainerElement(), this.getThemeName(this.darkTheme));
    }
    this.darkTheme = darkTheme;
    this.renderer.addClass(this.document.body, this.getThemeName(darkTheme));
    this.renderer.addClass(this.overlayContainer.getContainerElement(), this.getThemeName(darkTheme));
  }

  getThemeName(darkTheme: boolean) {
    return darkTheme ? 'dark-theme' : 'light-theme';
  }

}
