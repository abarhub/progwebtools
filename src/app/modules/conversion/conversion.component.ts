import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Base64Service} from "../../services/base64.service";
import {YamlService} from "../../services/yaml.service";
import {PageInterface} from "../entity/page.interface";
import {DateService} from "../../services/date.service";
import {JwtService} from "../../services/jwt.service";
import {StrConvertService} from "../../services/str-convert.service";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
  standalone: false
})
export class ConversionComponent implements OnInit, PageInterface {

  langages: string[] = ["json", "str -> base64", "base64 -> str", "yml -> properties", "epoch -> datetime", "datetime -> millisecondes", "jwt",
    "\\ -> /", "/ -> \\", "\\ -> \\\\", "\\\\ -> \\", "encode url", "encode paramètre url", "encode html", "decode html",
    "encode properties", "decode properties"];
  registrationForm: UntypedFormGroup = this.fb.group({texte: [''], texteResultat: ['']});
  texte: string = '';
  texteResultat: string = '';

  constructor(public fb: UntypedFormBuilder, private base64Service: Base64Service, private yamlService: YamlService,
              private dateService: DateService, private jwtService: JwtService, private strConvertService: StrConvertService) {
  }

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
      } else if (langageSelect == this.langages[6]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.jwtService.parseJwt(s);
        console.log(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[7]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.convertBackSlashToSlash(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[8]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.convertSlashToBackslash(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[9]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.doubleBackslash(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[10]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.removeDoubleBackslash(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[11]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.encodeUrl(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[12]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.encodeParamUrl(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[13]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.encodeHtml(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[14]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.decodeHtml(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[15]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.encodeToPropertiesFormat(s);
        this.texteResultat = s;
      } else if (langageSelect == this.langages[16]) {
        let s = this.registrationForm.get('texte')?.value;
        s = this.strConvertService.decodeFromPropertiesFormat(s);
        this.texteResultat = s;
      }
    }
  }

  onSubmit() {

  }

}
