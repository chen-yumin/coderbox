import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import { SidenavService } from '../sidenav/sidenav.service';
import { Subject } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let sidenavService: SidenavService;
  const sidenavMock = {
    toggle: jasmine.createSpy()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MatToolbarModule],
      providers: [SidenavService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.get(SidenavService);
    spyOnProperty(sidenavService, 'sidenav', 'get').and.returnValue(
      sidenavMock
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidenav on clicking menu button', () => {
    expect(sidenavMock.toggle).not.toHaveBeenCalled();
    const menuBtn = fixture.debugElement.query(
      By.css('[data-test-id="sidenav-toggle-button"]')
    );
    menuBtn.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(sidenavMock.toggle).toHaveBeenCalledTimes(1);
  });
});
