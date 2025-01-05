import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DateComponent} from './date.component';
import {CommonModule} from "@angular/common";
import {DateRoutingModule} from "./date-routing.module";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCard} from "@angular/material/card";
import {MatCardModule} from "@angular/material/card";

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
