import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConversionComponent} from "./conversion.component";

const routes: Routes = [
  { path: '', component: ConversionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionRoutingModule { }
