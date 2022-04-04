import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesComponent} from "../notes/notes.component";
import {CodeComponent} from "./code.component";

const routes: Routes = [
  { path: '', component: CodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
