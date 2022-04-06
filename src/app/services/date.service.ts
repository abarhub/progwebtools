import {Injectable} from "@angular/core";
import {DateTime} from "luxon";

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
      return DateTime.fromMillis(epochNumber);
    }
  }

  dateToEpoch(date: string): number{
    return DateTime.fromISO(date).toMillis();
  }

  dateToString(datetime: DateTime): string {
    return datetime.toFormat('yyyy-MM-dd\'T\'HH:mm:ss')
  }
}
