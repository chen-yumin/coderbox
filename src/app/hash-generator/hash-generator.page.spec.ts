import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashGeneratorPage } from './hash-generator.page';

describe('HashGeneratorPage', () => {
  let component: HashGeneratorPage;
  let fixture: ComponentFixture<HashGeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashGeneratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
