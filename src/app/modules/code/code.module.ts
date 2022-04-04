import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        CodeComponent
    ],
    exports: [
        CodeComponent
    ],
  imports: [
    CommonModule,
    CodeRoutingModule,
    CodemirrorModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class CodeModule { }
