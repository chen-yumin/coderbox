import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HashGeneratorPage } from './hash-generator.page';

describe('HashGeneratorPage', () => {
  let component: HashGeneratorPage;
  let fixture: ComponentFixture<HashGeneratorPage>;
  const TEST_HASH_SHA256 = {
    algo: 'SHA-256',
    enabled: true,
    digest: null,
    digestRep: ''
  };
  const TEST_CODERBOX_STR: string = 'CoderBox';
  const TEST_CODERBOX_U8A: Uint8Array = new Uint8Array([
    67,
    111,
    100,
    101,
    114,
    66,
    111,
    120
  ]);
  const TEST_CODERBOX_SHA256: string =
    '75D878F164AE4F748B9F670F0B32F8FE2660D533633B0EE529E45739DE8D9D20';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HashGeneratorPage],
      imports: [MatSnackBarModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'onInputMessage').and.callThrough();
    spyOn(component, 'calculateHash').and.callThrough();
    spyOn(crypto.subtle, 'digest').and.callThrough();
    spyOn(component, 'representDigest').and.callThrough();
  });

  it('should get correct digest from calculateHash on valid input', async () => {
    const hash = Object.assign({}, TEST_HASH_SHA256);
    await component.calculateHash(TEST_CODERBOX_U8A, hash);
    expect(component.calculateHash).toHaveBeenCalledTimes(1);
    expect(crypto.subtle.digest).toHaveBeenCalledTimes(1);
    expect(component.representDigest).toHaveBeenCalledTimes(1);
    expect(hash.digest).toBeTruthy();
    expect(hash.digestRep).toEqual(TEST_CODERBOX_SHA256);
  });

  it('should not do anything from calculateHash on unenabled hash input', async () => {
    const hash = Object.assign({}, TEST_HASH_SHA256);
    hash.enabled = false;
    await component.calculateHash(TEST_CODERBOX_U8A, hash);
    expect(component.calculateHash).toHaveBeenCalledTimes(1);
    expect(crypto.subtle.digest).toHaveBeenCalledTimes(0);
    expect(component.representDigest).toHaveBeenCalledTimes(0);
    expect(hash.digest).toBe(null);
    expect(hash.digestRep).toEqual('');
  });

  it('should invoke calculateHash on input message event', () => {
    const textInput = fixture.debugElement.query(By.css('#text-input'));
    textInput.nativeElement.value = TEST_CODERBOX_STR;
    textInput.nativeElement.dispatchEvent(new Event('input'));
    expect(component.onInputMessage).toHaveBeenCalledTimes(1);
    expect(component.calculateHash).toHaveBeenCalledTimes(
      component.hashes.length
    );
    expect(component.inputSource).toEqual(TEST_CODERBOX_U8A);
  });
});
