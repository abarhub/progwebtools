import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CodemirrorComponent} from "@ctrl/ngx-codemirror";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: EditorComponent, multi: true
  }]
})
export class EditorComponent implements ControlValueAccessor,OnInit {

  // private _langage: string='';

  // get langage(): string {
  //   return this._langage;
  // }
  static noDernier:number=1;
  no:number=0;

  @Input()
  set langage(value: string) {
    // this._langage = value;
    this.codeMirrorOptions.mode=value;
  }

  @Input()
  set theme(value: string) {
    // this._langage = value;
    this.codeMirrorOptions.theme=value;
  }

  @ViewChild(CodemirrorComponent,{static: true})
  inputElementRef!: CodemirrorComponent;

  onTouched = () => {};
  onChange = (_: any) => {};

  codeMirrorOptions: any
    = {
    theme: 'default',
    mode: 'javascript',
    lineNumbers: true,
    lineWrapping: true,
    //foldGutter: true,
    //gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    //autoCloseBrackets: true,
    //matchBrackets: true,
    //lint: true
    value: ''
  };
  valeur: string='';
  isupdated:boolean=false;
  isupdated2:boolean=false;

  constructor(private _renderer: Renderer2) {
    this.no=EditorComponent.noDernier;
    EditorComponent.noDernier++;
  }

  ngOnInit(): void {
    this.codeMirrorOptions = {
      theme: 'default',
      mode: 'javascript',
      lineNumbers: true,
      lineWrapping: true,
      //foldGutter: true,
      //gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      //autoCloseBrackets: true,
      //matchBrackets: true,
      //lint: true
      value: ''
    };
    }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    if(this.inputElementRef) {
      this.isupdated=true;
      this.inputElementRef.registerOnChange(fn);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    if(this.inputElementRef) {
      this.isupdated2=true;
      this.inputElementRef.registerOnTouched(fn);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    if(this.inputElementRef) {
      this.inputElementRef.setDisabledState(isDisabled);
    }
  }

  writeValue(value: any): void {
    console.log('writeValue', value);
    if(this.inputElementRef) {
      this.inputElementRef.writeValue(value);
      console.log('writeValue ok');
    } else {
      console.log('writeValue KO');
    }
    this.codeMirrorOptions.value=value;
    console.log('elt',this.inputElementRef);
  }

}
