import { Component, OnInit } from '@angular/core';
import Hashes from 'jshashes';

@Component({
  selector: 'app-hash-generator',
  templateUrl: './hash-generator.page.html',
  styleUrls: ['./hash-generator.page.scss'],
})
export class HashGeneratorPage implements OnInit {
  _MD5: any;
  _SHA1: any;
  _SHA256: any;
  _SHA512: any;
  _RMD160: any;
  str: string;
  md5: string;
  sha1: string;
  sha256: string;
  sha512: string;
  rmd160: string;

  constructor() {
    this._MD5 = new Hashes.MD5;
    this._SHA1 = new Hashes.SHA1;
    this._SHA256 = new Hashes.SHA256;
    this._SHA512 = new Hashes.SHA512;
    this._RMD160 = new Hashes.RMD160;
  }

  ngOnInit() {
  }

  updateHash(): void {
    this.md5 = this._MD5.hex(this.str);
    this.sha1 = this._SHA1.hex(this.str);
    this.sha256 = this._SHA256.hex(this.str);
    this.sha512 = this._SHA512.hex(this.str);
    this.rmd160 = this._RMD160.hex(this.str);
  }

  copyToClipboard(id: string): void {
    const input = <HTMLInputElement>document.querySelector(`#${id} ion-input input`);
    input.select();
    document.execCommand("copy");
  }

}
