import { Component } from '@angular/core';
import { SEOService } from './shared/services/seo/seo.service';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private seoService: SEOService,
    private themeService: ThemeService // Initialize ThemeService before app starts
  ) {
    seoService.setupMetaUpdate();
  }
}
