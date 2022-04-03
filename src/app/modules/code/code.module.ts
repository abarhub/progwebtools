import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code/code.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ReactiveFormsModule} from "@angular/forms";


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
        ReactiveFormsModule
    ]
})
export class CodeModule { }
