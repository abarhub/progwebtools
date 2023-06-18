import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DateComponent} from './date.component';
import {CommonModule} from "@angular/common";
import {DateRoutingModule} from "./date-routing.module";
import {MatDividerModule} from "@angular/material/divider";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCard} from "@angular/material/card";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateComponent],
      imports: [
        CommonModule,
        DateRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatLuxonDateModule,
        MatSelectModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule
      ],
      providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr'},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
