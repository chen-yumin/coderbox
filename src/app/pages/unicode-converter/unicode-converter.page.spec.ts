import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';

import { UnicodeConverterPage } from './unicode-converter.page';

describe('UnicodeConverterPage', () => {
  let component: UnicodeConverterPage;
  let fixture: ComponentFixture<UnicodeConverterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnicodeConverterPage],
      imports: [TextFieldModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicodeConverterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
