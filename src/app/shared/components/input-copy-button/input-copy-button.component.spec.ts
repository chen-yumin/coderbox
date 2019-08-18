import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InputCopyButtonComponent } from './input-copy-button.component';

describe('InputCopyButtonComponent', () => {
  let component: InputCopyButtonComponent;
  let fixture: ComponentFixture<InputCopyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputCopyButtonComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCopyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
