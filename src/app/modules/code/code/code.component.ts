import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageInterface} from "../../entity/page.interface";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit, PageInterface {

  codeForm: FormGroup = this.fb.group({srccodejavascript: [''],srccodejavascript2:['']});
  resultatCode:string[]=[];

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {

    const s='let i=1;\n' +
      'console.log(\'coucou\');\n' +
      'for(let j=0;j<5;j++){\n' +
      '  i=i+1;\n' +
      '}\n' +
      'return i;';
    this.codeForm.get('srccodejavascript')?.setValue(s);
    this.codeForm.get('srccodejavascript2')?.setValue(s);
  }

  executeJavascript() {
    let code = this.codeForm.get('srccodejavascript')?.value;
    if(code){
      const tmp=Function('"use strict";' +
        /*'{\n' +
          '  const log = console.log.bind(console)\n' +
          '  console.log = (...args) => {\n' +
          '    log(\'My Console!!!\')\n' +
          '    log(...args)\n' +
          '  }\n' +
          '}'+*/
        code);
      console.log('execution...');
      const res=tmp();
      console.log('execution ok. resultat:'+res);
      this.resultatCode.push(res);
    }
  }

  onSubmit() {

  }

}
