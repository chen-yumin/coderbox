import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavService } from './components/sidenav/sidenav.service';
import { BreakpointService } from './services/breakpoint/breakpoint.service';
import { FileDropAreaComponent } from './components/file-drop-area/file-drop-area.component';
import { CircleClockComponent } from './components/circle-clock/circle-clock.component';
import { InputCopyButtonComponent } from './components/input-copy-button/input-copy-button.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

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
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatTooltipModule,
  MatIconModule
];
const SVG_ICONS = [
  { iconName: "coderbox",         fileName: "coderbox.svg" },
  { iconName: "github",           fileName: "github.svg" },
  { iconName: "hash-generator",   fileName: "hash-generator.svg" },
  { iconName: "epoch-converter",  fileName: "epoch-converter.svg" },
  { iconName: "dark-theme",       fileName: "dark-theme.svg" },
  { iconName: "copy",             fileName: "copy.svg" },
  { iconName: "file",             fileName: "file.svg" },
  { iconName: "time",             fileName: "time.svg" },
  { iconName: "calendar",         fileName: "calendar.svg" },
  { iconName: "hourglass",        fileName: "hourglass.svg" },
  { iconName: "locale-time",      fileName: "locale-time.svg" },
  { iconName: "iso",              fileName: "iso.svg" }
];

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    FileDropAreaComponent,
    CircleClockComponent,
    InputCopyButtonComponent,
    RelativeTimePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...ANGULAR_MATERIAL_MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    SidenavComponent,
    FileDropAreaComponent,
    CircleClockComponent,
    InputCopyButtonComponent,
    RelativeTimePipe,
    ...ANGULAR_MATERIAL_MODULES
  ]
})
export class SharedModule {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(DOCUMENT) private _document: Document
  ) {
    const origin = this._document.location.origin;
    const registerIcon = ((iconName: string, fileName: string) => {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${origin}/assets/icons/${fileName}`
        )
      );
    });
    SVG_ICONS.forEach((icon) => {
      registerIcon(icon.iconName, icon.fileName);
    });
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
        SidenavService,
        BreakpointService
      ]
    };
  }
}
