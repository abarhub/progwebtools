import {DateTime} from "luxon";
import {DateObjectUnits} from "luxon/src/datetime";

export class ContextExecutionService {

  public getNow(): DateTime {
    return DateTime.now();
  }

  public getDateLocal(year: number,
                      month: number,
                      day: number,
                      hour: number,
                      minute: number): DateTime {
    return DateTime.local(year, month, day, hour, minute);
  }

  public getDateFromObject(obj: DateObjectUnits): DateTime {
    return DateTime.fromObject(obj);
  }

  public getDateFromISO(date: string): DateTime {
    return DateTime.fromISO(date);
  }

  public getDateFromFormat(text: string, fmt: string): DateTime {
    return DateTime.fromFormat(text, fmt);
  }

}
