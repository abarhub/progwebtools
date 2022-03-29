import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComponent } from './code.component';
import {CommonModule} from "@angular/common";
import {CodeRoutingModule} from "../code-routing.module";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ReactiveFormsModule} from "@angular/forms";

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeComponent ],
      imports: [
        CommonModule,
        CodeRoutingModule,
        CodemirrorModule,
        ReactiveFormsModule
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
