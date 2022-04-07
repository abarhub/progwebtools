import {DateTime} from "luxon";
import {DateObjectUnits} from "luxon/src/datetime";
import {FilesService} from "./files.service";
import {Base64Service} from "./base64.service";
import {DateService} from "./date.service";
import {YamlService} from "./yaml.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContextExecutionService {

  private _filesService:FilesService;
  private _base64Service:Base64Service;
  private _dateService:DateService;
  private _yamlService:YamlService;

  constructor(filesService: FilesService, base64Service: Base64Service, dateService: DateService, yamlService: YamlService) {
    this._filesService = filesService;
    this._base64Service = base64Service;
    this._dateService = dateService;
    this._yamlService = yamlService;
  }

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

  filesService(): FilesService {
    return this._filesService;
  }

  base64Service(): Base64Service {
    return this._base64Service;
  }

  dateService(): DateService {
    return this._dateService;
  }

  yamlService(): YamlService {
    return this._yamlService;
  }
}
