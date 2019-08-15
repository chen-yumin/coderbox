import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { FileDropAreaComponent } from './components/file-drop-area/file-drop-area.component';
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
  MatExpansionModule,
  MatTabsModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  MatTooltipModule,
  MatIconModule
];

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    FileDropAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...ANGULAR_MATERIAL_MODULES
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    FileDropAreaComponent,
    FormsModule,
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
    this.matIconRegistry.addSvgIcon(
      'hash-generator',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/hash-generator.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'copy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/copy.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'file',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/file.svg')
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
