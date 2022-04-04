import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConversionComponent} from "../conversion/conversion.component";
import {NotesComponent} from "./notes.component";

const routes: Routes = [
  { path: '', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
