import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotesComponent} from './notes.component';
import {CommonModule} from "@angular/common";
import {NotesRoutingModule} from "./notes-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {EditorModule} from "../editor/editor.module";

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesComponent],
      imports: [
        CommonModule,
        NotesRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatButtonModule,
        EditorModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
