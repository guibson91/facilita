import { NgModule } from '@angular/core';
import { FormatCurrencyPipe } from './format-currency/format-currency.pipe';
import { MatchesCategoryPipe } from './matches-category/matches-category.pipe';
import { PrintPermissionPipe } from './print-permission/print-permission.pipe';
import { ObjectNgForPipe } from './object-ngfor/object-ngfor.pipe';
import { FormatDistancePipe } from './format-distance/format-distance.pipe';
import { ChangePipe } from './change/change.pipe';
import { Max_12StringPipe } from './max-12-string/max-12-string.pipe';
import { AbsPipe } from './abs/abs.pipe';
import { NoNegativePipe } from './no-negative/no-negative.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { TimestampToDatePipe } from './timestamp-to-date/timestamp-to-date.pipe';

@NgModule({
    declarations: [
        FormatCurrencyPipe,
        MatchesCategoryPipe,
        PrintPermissionPipe,
        ObjectNgForPipe,
        FormatDistancePipe,
        ChangePipe,
        Max_12StringPipe,
        AbsPipe,
        NoNegativePipe,
        TimestampToDatePipe
    ],
    imports: [
        NgPipesModule
    ],
    exports: [
        NgPipesModule,
        FormatCurrencyPipe,
        MatchesCategoryPipe,
        PrintPermissionPipe,
        ObjectNgForPipe,
        FormatDistancePipe,
        ChangePipe,
        Max_12StringPipe,
        AbsPipe,
        NoNegativePipe,
        TimestampToDatePipe
    ]
})
export class PipesModule { }