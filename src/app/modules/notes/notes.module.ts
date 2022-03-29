import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    NotesComponent
  ],
    imports: [
        CommonModule,
        NotesRoutingModule,
        MatTabsModule
    ]
})
export class NotesModule { }
