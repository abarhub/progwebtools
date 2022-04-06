import {Component, OnInit} from '@angular/core';
import {DateTime} from "luxon";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OperateurEnum} from "../entity/operateur.enum";
import {DateUniteEnum} from "../entity/date.unite.enum";
import {DateService} from "../../services/date.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateJour: DateTime=DateTime.now();
  dateJourMilli:number=0;

  operateurForm: FormGroup = this.fb.group({dateOperateur: [''], operateur:[''], valeurOperateur:[''], unite:['']});
  //dateOperateur: DateTime=DateTime.now();
  listeOperateur: string[]=['+','-'];
  //valeurOperateur: string='';
  listeUnite: string[]=['jour', 'mois']
  resultat:string='';

  constructor(public fb: FormBuilder, private dateService:DateService) { }

  ngOnInit(): void {
    this.majDate();
    this.operateurForm = this.fb.group({
      dateOperateur: [''],
      operateur: ['+'],
      valeurOperateur: ['1'],
      unite:['jour']
    });
  }

  majDate() {
    this.dateJour= DateTime.now();
    this.dateJourMilli=this.dateJour.toMillis();
  }

  calcul() {
    let date=this.operateurForm.get('dateOperateur')?.value;
    let operateur=this.operateurForm.get('operateur')?.value;
    let valeur=this.operateurForm.get('valeurOperateur')?.value;
    let unite=this.operateurForm.get('unite')?.value;

    console.log("calcul",date,operateur,valeur, typeof date, unite);
    if(date&&date instanceof DateTime&&this.dateService.isDateTime(date)&&operateur&&unite){
      let op:OperateurEnum=(operateur=='+')?OperateurEnum.Plus:OperateurEnum.Moins;
      let unit:DateUniteEnum=(unite=='jour')?DateUniteEnum.Jour:DateUniteEnum.Mois;
      const date2=this.dateService.calculDate(date, op,valeur,unit);
      this.resultat=date2.toFormat('dd-MM-yyyy');
    } else {
      this.resultat = 'XXX';
    }
  }

  onSubmitOperateur() {

  }
}
