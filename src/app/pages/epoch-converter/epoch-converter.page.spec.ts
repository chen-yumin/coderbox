import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { EpochConverterPage } from './epoch-converter.page';
import { RelativeTimePipe } from '../../shared/pipes/relative-time.pipe';

describe('EpochConverterPage', () => {
  let component: EpochConverterPage;
  let fixture: ComponentFixture<EpochConverterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EpochConverterPage,
        RelativeTimePipe
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
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
