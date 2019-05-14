import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpochConverterPage } from './epoch-converter.page';

describe('EpochConverterPage', () => {
  let component: EpochConverterPage;
  let fixture: ComponentFixture<EpochConverterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpochConverterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpochConverterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
