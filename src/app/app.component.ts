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
  registrationForm: FormGroup = this.fb.group({texte: ['']});

  constructor(public fb: FormBuilder, private base64Service: Base64Service, private yamlService:YamlService) {
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
      } else if(langageSelect == this.langages[3]){
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
  }
}
