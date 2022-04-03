import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { ConversionComponent } from './conversion/conversion.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
    declarations: [
        ConversionComponent
    ],
    exports: [
        ConversionComponent
    ],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    ReactiveFormsModule,
    MatGridListModule
  ]
})
export class ConversionModule { }
