import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacySliderModule as MatSliderModule} from "@angular/material/legacy-slider";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import {RouterModule} from "@angular/router";
import {TabModule} from "./modules/tab/tab.module";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        RouterModule,
        TabModule,
        MatDividerModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
