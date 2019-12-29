import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let bodyClassList: DOMTokenList;
  let overlayClassList: DOMTokenList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ThemeService);
    bodyClassList = document.body.classList;
    overlayClassList = document.body.getElementsByClassName(
      'cdk-overlay-container'
    )[0].classList;
  });

  it('should initialize with default theme', () => {
    expect(service).toBeTruthy();
    expect(service.darkTheme).toBe(
      service.themeMatcher.matches,
      'should set default theme as per query matches'
    );
  });

  it('should add "dark-theme" class after setting darkTheme to `true`', () => {
    service.darkTheme = true;
    expect(bodyClassList.contains('light-theme')).toBe(
      false,
      'should not contain "light-theme" class'
    );
    expect(overlayClassList.contains('light-theme')).toBe(
      false,
      'should not contain "light-theme" class'
    );
    expect(bodyClassList.contains('dark-theme')).toBe(
      true,
      'should contain "dark-theme" class'
    );
    expect(overlayClassList.contains('dark-theme')).toBe(
      true,
      'should contain "dark-theme" class'
    );
  });

  it('should add "light-theme" class after setting darkTheme to `false`', () => {
    service.darkTheme = false;
    expect(bodyClassList.contains('light-theme')).toBe(
      true,
      'should contain "light-theme" class'
    );
    expect(overlayClassList.contains('light-theme')).toBe(
      true,
      'should contain "light-theme" class'
    );
    expect(bodyClassList.contains('dark-theme')).toBe(
      false,
      'should not contain "dark-theme" class'
    );
    expect(overlayClassList.contains('dark-theme')).toBe(
      false,
      'should not contain "dark-theme" class'
    );
  });

  it('should clean up previous theme class after switching theme', () => {
    const bodyClassLength = bodyClassList.length;
    const overlayClassLength = overlayClassList.length;
    for (let i = 0; i < 10; i++) {
      let prevBodyClassVal = bodyClassList.value;
      let prevOverlayClassVal = overlayClassList.value;
      service.darkTheme = !service.darkTheme;
      expect(bodyClassList.length).toBe(bodyClassLength);
      expect(overlayClassList.length).toBe(overlayClassLength);
      expect(bodyClassList.value).not.toBe(prevBodyClassVal);
      expect(overlayClassList.value).not.toBe(prevOverlayClassVal);
    }
  });
});
