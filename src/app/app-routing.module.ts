import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'conversion', loadChildren: () => import('./modules/conversion/conversion.module').then(m => m.ConversionModule) },
  { path: 'code', loadChildren: () => import('./modules/code/code.module').then(m => m.CodeModule) },
  { path: 'notes', loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
