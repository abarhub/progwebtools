import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ConversionModule} from "../conversion/conversion.module";
import {CodeModule} from "../code/code.module";
import {NotesModule} from "../notes/notes.module";


@NgModule({
  declarations: [
    TabComponent
  ],
  exports: [
    TabComponent
  ],
  imports: [
    CommonModule,
    TabRoutingModule,
    MatTabsModule,
    ConversionModule,
    CodeModule,
    NotesModule
  ]
})
export class TabModule { }
