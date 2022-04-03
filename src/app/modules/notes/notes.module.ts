import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import {MatTabsModule} from "@angular/material/tabs";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NotesComponent
  ],
  exports: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatTabsModule,
    CodemirrorModule,
    ReactiveFormsModule
  ]
})
export class NotesModule { }
