import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {ConversionModule} from "../conversion/conversion.module";
import {CodeModule} from "../code/code.module";
import {NotesModule} from "../notes/notes.module";
import {DateModule} from "../date/date.module";
import {FilesModule} from "../files/files.module";


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
        NotesModule,
        DateModule,
        FilesModule
    ]
})
export class TabModule { }
