import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {EditorModule} from "../editor/editor.module";


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
        ReactiveFormsModule,
        MatButtonModule,
        EditorModule
    ]
})
export class CodeModule { }
