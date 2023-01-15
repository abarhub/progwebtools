import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotesComponent} from './notes.component';
import {CommonModule} from "@angular/common";
import {NotesRoutingModule} from "./notes-routing.module";
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
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
