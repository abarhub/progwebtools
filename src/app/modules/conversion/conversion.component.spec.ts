import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionComponent } from './conversion.component';
import {CommonModule} from "@angular/common";
import {ConversionRoutingModule} from "./conversion-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionComponent ],
      imports: [
        CommonModule,
        ConversionRoutingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
