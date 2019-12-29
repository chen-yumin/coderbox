import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';

interface Hash {
  algo: string;
  enabled: boolean;
  digest: ArrayBuffer;
  digestRep: string;
}

@Component({
  selector: 'app-hash-generator',
  templateUrl: './hash-generator.page.html',
  styleUrls: ['./hash-generator.page.scss']
})
export class HashGeneratorPage implements OnInit {
  hashes: Hash[] = [
    {
      algo: 'SHA-1',
      enabled: true,
      digest: null,
      digestRep: ''
    },
    {
      algo: 'SHA-256',
      enabled: true,
      digest: null,
      digestRep: ''
    },
    {
      algo: 'SHA-384',
      enabled: true,
      digest: null,
      digestRep: ''
    },
    {
      algo: 'SHA-512',
      enabled: true,
      digest: null,
      digestRep: ''
    }
  ];
  outputReps: string[] = ['Decimal', 'Lower Hex', 'Upper Hex', 'Base64'];
  representation: number = 3; // Default representation is Upper Hex
  inputSource: ArrayBuffer;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  onInputMessage(inputEvent): void {
    const message = inputEvent.target.value;
    this.inputSource = new TextEncoder().encode(message);
    this.hashes.forEach(hash => this.calculateHash(this.inputSource, hash));
  }

  onInputFile(fileList: FileList): void {
    if (!fileList || fileList.length == 0) return;
    if (fileList.length > 1) {
      const message =
        'You have selected multiple files. Only the first file is being read.';
      this.snackBar.open(message, 'OK', { duration: 10000 });
    }
    const reader = new FileReader();
    reader.onload = e => {
      this.inputSource = reader.result as ArrayBuffer;
      this.hashes.forEach(hash => this.calculateHash(this.inputSource, hash));
    };
    reader.readAsArrayBuffer(fileList[0]);
  }

  onConfigAlgoChange(checkboxChange: MatCheckboxChange, hash: Hash): void {
    if (checkboxChange.checked) {
      this.calculateHash(this.inputSource, hash);
    } else {
      hash.digest = null;
      hash.digestRep = '';
    }
  }

  onConfigRepChange(radioChange: MatRadioChange): void {
    this.representation = radioChange.value;
    this.hashes.forEach(hash => {
      if (!hash.enabled) return;
      hash.digestRep = this.representDigest(hash.digest);
    });
  }

  async calculateHash(data: ArrayBuffer, hash: Hash) {
    if (!data || !hash || !hash.enabled) return;
    hash.digest = await crypto.subtle.digest(hash.algo, data);
    hash.digestRep = this.representDigest(hash.digest);
  }

  representDigest(digest: ArrayBuffer): string {
    const toHex = (digest: ArrayBuffer) =>
      Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

    switch (this.representation) {
      case 1:
        return new Uint8Array(digest).toString();
      case 2:
        return toHex(digest);
      case 3:
        return toHex(digest).toUpperCase();
      case 4:
        return btoa(String.fromCharCode(...new Uint8Array(digest)));
    }
  }
}
