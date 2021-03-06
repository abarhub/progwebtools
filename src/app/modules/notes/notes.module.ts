import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotesRoutingModule} from './notes-routing.module';
import {NotesComponent} from './notes.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {EditorModule} from "../editor/editor.module";


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
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    EditorModule
  ]
})
export class NotesModule {
}
