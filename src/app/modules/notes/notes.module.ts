import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotesRoutingModule} from './notes-routing.module';
import {NotesComponent} from './notes.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
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
