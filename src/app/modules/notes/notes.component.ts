import { Component, OnInit } from '@angular/core';
import {PageInterface} from "../entity/page.interface";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, PageInterface {

  langages: string[]=['null','javascript', 'xml', 'htmlmixed', 'java', 'sql', 'markdown'];
  themes: string[]=['material','default', 'dracula', 'idea'];
  mode: string='javascript';
  theme: string='default';
  codeMirrorOptions: any = {
    theme: 'default',
    mode: 'javascript',
    lineNumbers: true,
    lineWrapping: true,
    //foldGutter: true,
    //gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    //autoCloseBrackets: true,
    //matchBrackets: true,
    //lint: true
  };

  noteForm: UntypedFormGroup = this.fb.group({texte: [''], langageSelectionne: [''], theme: ['default']});

  constructor(public fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  appliquer() {
    const code = this.noteForm.get('langageSelectionne')?.value;
    if(code){
      this.mode=code;
      this.codeMirrorOptions.mode=this.mode;
    }
    const themeSelectionne = this.noteForm.get('themes')?.value;
    if(themeSelectionne){
      this.theme=themeSelectionne;
      this.codeMirrorOptions.theme=this.theme;
    }
  }
}
