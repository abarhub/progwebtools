import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRoutingModule } from './date-routing.module';
import { DateComponent } from './date.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";


@NgModule({
    declarations: [
        DateComponent
    ],
    exports: [
        DateComponent
    ],
  imports: [
    CommonModule,
    DateRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatLuxonDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
  ]
})
export class DateModule { }
