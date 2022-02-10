import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Base64Service} from "./services/base64.service";
import {YamlService} from "./services/yaml.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'progwebtools';
  langages: string[] = ["json", "str -> base64", "base64 -> str", "yml -> properties"];
  texte: string = '';
  texteResultat: string = '';
  langageSelectionne: string = '';
  registrationForm: FormGroup = this.fb.group({texte: [''], texteResultat:['']});
  codeForm: FormGroup = this.fb.group({srccodejavascript: [''],srccodejavascript2:['']});
  resultatCode:string[]=[];

  constructor(public fb: FormBuilder, private base64Service: Base64Service, private yamlService: YamlService) {
  }

  formate() {
    let langageSelect = this.registrationForm.get('langageSelectionne')?.value;
    if (langageSelect) {
      if (langageSelect == this.langages[0]) {
        let s = this.registrationForm.get('texte')?.value;
        s = JSON.stringify(JSON.parse(s), null, 4);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[1]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.base64Service.toBase64(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[2]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.base64Service.fromBase64(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[3]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.yamlService.toProperties(s);
        this.texteResultat = s;
      }
    }
  }

  onSubmit() {

  }

  ngOnInit(): void {
    const texte = "{\"key1\":\"aaa\",\"key2\":\"bbb\",\"key3\":{\"m1\":[1,2,3],\"m2\":\"hhhh\",\"m3\":[\"sss\",\"ddd\",\"fff\"]}}";
    this.registrationForm = this.fb.group({
      langageSelectionne: [this.langages[0]],
      texte: [texte]
    });

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
}
