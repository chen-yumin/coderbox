import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import Hashes from 'jshashes';

@IonicPage({
  name: 'hash-generator',
  segment: 'hash-generator'
})
@Component({
  selector: 'hash-generator',
  templateUrl: 'hash-generator.html'
})
export class HashGeneratorPage {
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

  constructor(public navCtrl: NavController) {
    this._MD5 = new Hashes.MD5;
    this._SHA1 = new Hashes.SHA1;
    this._SHA256 =  new Hashes.SHA256;
    this._SHA512 = new Hashes.SHA512;
    this._RMD160 = new Hashes.RMD160;
  }

  updateStr() : void {
    this.md5 = this._MD5.hex(this.str);
    this.sha1 = this._SHA1.hex(this.str);
    this.sha256 = this._SHA256.hex(this.str);
    this.sha512 = this._SHA512.hex(this.str);
    this.rmd160 = this._RMD160.hex(this.str);
  }

}
