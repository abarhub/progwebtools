import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatIconModule} from "@angular/material/icon";
import {FileSaverModule} from "ngx-filesaver";



@NgModule({
    declarations: [
        FilesComponent
    ],
    exports: [
        FilesComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FileSaverModule
  ]
})
export class FilesModule { }
