import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRoutingModule } from './date-routing.module';
import { DateComponent } from './date.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";


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
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
  ]
})
export class DateModule { }
