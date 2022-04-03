import { Component, OnInit } from '@angular/core';
import {PageInterface} from "../entity/page.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, PageInterface {

  langages: string[]=['','javascript', 'xml', 'htmlmixed', 'java', 'sql', 'markdown'];
  themes: string[]=['material','default', 'dracula'];
  mode: string='javascript';
  theme: string='material';

  noteForm: FormGroup = this.fb.group({texte: [''], langageSelectionne: [''], theme: ['material']});

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  appliquer() {
    const code = this.noteForm.get('langageSelectionne')?.value;
    if(code){
      this.mode=code;
    }
    const themeSelectionne = this.noteForm.get('themes')?.value;
    if(themeSelectionne){
      this.theme=themeSelectionne;
    }
  }
}
