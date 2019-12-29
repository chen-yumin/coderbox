import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscription, timer, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateValidator } from '../../shared/validators/date.validator';

@Component({
  selector: 'app-epoch-converter',
  templateUrl: './epoch-converter.page.html',
  styleUrls: ['./epoch-converter.page.scss']
})
export class EpochConverterPage implements OnInit, OnDestroy {
  readonly MILLISECOND_CUTOFF: number = 100000000000;
  millisecondsToggleCtrl: FormControl;
  epochInputCtrl: FormControl;
  stringInputCtrl: FormControl;
  epochInputDate: Date;
  stringInputDate: Date;
  now$: Observable<Date>;
  private subscriptions: Subscription[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const date = new Date();
    this.epochInputDate = date;
    this.stringInputDate = date;

    if (isPlatformBrowser(this.platformId)) {
      // timer only runs on a browser, otherwise it blocks server-side rendering process
      this.now$ = timer(0, 100).pipe(map(() => new Date()));
    } else {
      this.now$ = of(date);
    }

    this.millisecondsToggleCtrl = new FormControl();
    this.epochInputCtrl = new FormControl(date.getTime(), [
      Validators.required,
      Validators.min(-8640000000000000),
      Validators.max(8640000000000000),
      Validators.pattern(/^-?[0-9]+$/)
    ]);
    this.stringInputCtrl = new FormControl(
      date.toLocaleString(undefined, { timeZoneName: 'short' }),
      [DateValidator]
    );
    this.subscriptions.push(
      this.epochInputCtrl.valueChanges.subscribe((value: number) => {
        this.epochInputCtrl.markAsTouched();
        if (value === null) return;
        if (this.isSeconds(value)) value *= 1000;
        const date = new Date(value);
        if (isNaN(date.getTime())) return;
        this.epochInputDate = date;
      })
    );
    this.subscriptions.push(
      this.stringInputCtrl.valueChanges.subscribe(value => {
        this.stringInputCtrl.markAsTouched();
        const date = new Date(value);
        if (isNaN(date.getTime())) return;
        this.stringInputDate = date;
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  isSeconds(value: number) {
    return Math.abs(value) < this.MILLISECOND_CUTOFF;
  }

  getErrorMessage(ctrl: FormControl): string {
    switch (ctrl) {
      case this.epochInputCtrl:
        if (ctrl.hasError('min') || ctrl.hasError('max')) {
          return 'Value out of range';
        }
        if (ctrl.hasError('required') || ctrl.hasError('pattern')) {
          return 'Please enter a valid integer';
        }
        break;
      case this.stringInputCtrl:
        if (ctrl.hasError('invalidDate')) {
          return 'Please enter a valid date';
        }
    }
    return null;
  }
}
