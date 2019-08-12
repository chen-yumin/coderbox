import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavService } from './components/sidenav/sidenav.service';
import { BreakpointService } from './services/breakpoint/breakpoint.service';

const ANGULAR_MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...ANGULAR_MATERIAL_MODULES
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    ...ANGULAR_MATERIAL_MODULES
  ]
})
export class SharedModule {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'coderbox',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/coderbox.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SidenavService,
        BreakpointService
      ]
    };
  }
}
