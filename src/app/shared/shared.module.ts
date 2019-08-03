import { NgModule } from '@angular/core';
import { NumberRoundPipe } from './number-round.pipe';

@NgModule({
    declarations: [
        NumberRoundPipe
    ],
    imports: [],
    exports: [
        NumberRoundPipe
    ]
})

export class SharedModule {}