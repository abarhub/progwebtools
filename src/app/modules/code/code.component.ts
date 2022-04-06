import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageInterface} from "../entity/page.interface";
import {CodeService} from "../../services/code.service";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit, PageInterface {

  codeForm: FormGroup = this.fb.group({srccodejavascript: [''], srccodejavascript2: ['']});
  resultatCode: string[] = [];
  static noDernier: number = 1;
  no: number = 0;

  constructor(public fb: FormBuilder, private codeService: CodeService) {
    this.no = CodeComponent.noDernier;
    CodeComponent.noDernier++;
  }

  ngOnInit(): void {

    const s = 'let i=1;\n' +
      'console.log(\'coucou\');\n' +
      'for(let j=0;j<5;j++){\n' +
      '  i=i+1;\n' +
      '}\n' +
      'return i;';
    this.codeForm.get('srccodejavascript')?.setValue(s);
  }

  executeJavascript() {
    let code = this.codeForm.get('srccodejavascript')?.value;
    if (code) {
      const res = this.codeService.execute(code);
      console.log('execution ok. resultat:' + res);
      this.resultatCode.push(res);
    }
  }

  onSubmit(): void {

  }

  videConsole(): void {
    this.resultatCode = [];
  }

  update() {
    const s = 'let i=1;\n' +
      'console.log(\'coucou\');\n' +
      'for(let j=0;j<5;j++){\n' +
      '  i=i+1;\n' +
      '}\n' +
      'return i;';
    this.codeForm.get('srccodejavascript')?.setValue(s);
  }
}
