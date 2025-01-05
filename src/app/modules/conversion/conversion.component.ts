import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Base64Service} from "../../services/base64.service";
import {YamlService} from "../../services/yaml.service";
import {PageInterface} from "../entity/page.interface";
import {DateService} from "../../services/date.service";

@Component({
    selector: 'app-conversion',
    templateUrl: './conversion.component.html',
    styleUrls: ['./conversion.component.css'],
    standalone: false
})
export class ConversionComponent implements OnInit, PageInterface {

  langages: string[] = ["json", "str -> base64", "base64 -> str", "yml -> properties", "epoch -> datetime", "datetime -> millisecondes"];
  registrationForm: UntypedFormGroup = this.fb.group({texte: [''], texteResultat:['']});
  texte: string = '';
  texteResultat: string = '';

  constructor(public fb: UntypedFormBuilder, private base64Service: Base64Service, private yamlService: YamlService, private dateService:DateService) { }

  ngOnInit(): void {
    const texte = "{\"key1\":\"aaa\",\"key2\":\"bbb\",\"key3\":{\"m1\":[1,2,3],\"m2\":\"hhhh\",\"m3\":[\"sss\",\"ddd\",\"fff\"]}}";
    this.registrationForm = this.fb.group({
      langageSelectionne: [this.langages[0]],
      texte: [texte]
    });
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
      } else if (langageSelect == this.langages[4]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.dateService.epochToDate(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[5]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.dateService.dateToEpoch(s);
        this.texteResultat = s;
      }
    }
  }

  onSubmit() {

  }

}
