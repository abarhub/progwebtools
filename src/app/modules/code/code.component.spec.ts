import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CodeComponent} from './code.component';
import {CommonModule} from "@angular/common";
import {CodeRoutingModule} from "./code-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {CodeEditor} from "@acrodata/code-editor";

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeComponent],
      imports: [
        CommonModule,
        CodeRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        CodeEditor
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
