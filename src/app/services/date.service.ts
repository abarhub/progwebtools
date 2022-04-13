import {Injectable} from "@angular/core";
import {DateTime} from "luxon";
import {OperateurEnum} from "../modules/entity/operateur.enum";
import {DateUniteEnum} from "../modules/entity/date.unite.enum";

@Injectable({
  providedIn: 'root',
})
export class DateService {

  epochToDate(epoch: string): DateTime | null {
    let epochNumber = parseInt(epoch, 10);
    if (isNaN(epochNumber)) {
      return null;
    } else {
      if (epochNumber.toString(10).length <= 10) {
        // l'epoch en en seconde => conversion en millisecondes
        epochNumber = epochNumber * 1000;
      }
      return DateTime.fromMillis(epochNumber, { zone: 'utc' });
    }
  }

  dateToEpoch(date: string): number{
    return DateTime.fromISO(date, { zone: 'utc' }).toMillis();
  }

  dateToString(datetime: DateTime): string {
    return datetime.toFormat('yyyy-MM-dd\'T\'HH:mm:ss')
  }

  calculDate(datetime: DateTime, operateur: OperateurEnum, valeur: number, unite:DateUniteEnum):DateTime {
    const opVal=(operateur===OperateurEnum.Plus)?valeur:-valeur;
    if (unite===DateUniteEnum.Jour){
      return datetime.plus({ days: opVal });
    } else {
      return datetime.plus({ months: opVal });
    }
  }

  isDateTime(date:any): date is DateTime {
    return (date as DateTime).day!==undefined;
}

  calculDifference(dateDebut: DateTime, dateFin: DateTime, unite:DateUniteEnum):string {
    if(unite===DateUniteEnum.Jour) {
      return dateFin.diff(dateDebut, 'days').days + ' jours';
    } else {
      return dateFin.diff(dateDebut, 'months').months + ' mois';
    }
  }
}
