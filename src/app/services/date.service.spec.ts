import {DateService} from "./date.service";
import {DateTime} from "luxon";
import {OperateurEnum} from "../modules/entity/operateur.enum";
import {DateUniteEnum} from "../modules/entity/date.unite.enum";

describe('Test DateService', () => {
  let dateService: DateService;

  it('test dateToEpoch', () => {
    dateService = new DateService();

    const res=dateService.dateToEpoch('2022-04-06T17:59:08.176');
    expect(res).toEqual(1649260748176);
  });

  it('test epochToDate OK', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6, hour: 17, minute: 59,second:8,millisecond:176});
    const res=dateService.epochToDate("1649260748176");
    expect(res).toEqual(date);
  });

  it('test epochToDate KO', () => {
    dateService = new DateService();

    const res=dateService.epochToDate("xxx");
    expect(res).toBeNull();
  });

  it('test dateToString', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6, hour: 17, minute: 59,second:8,millisecond:176});
    const res=dateService.dateToString(date);
    expect(res).toEqual('2022-04-06T17:59:08');
  });

  it('test calculDate plus', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6, hour: 17, minute: 59,second:8,millisecond:176});
    const dateRef=DateTime.fromObject({year: 2022, month: 4, day: 11, hour: 17, minute: 59,second:8,millisecond:176});
    const res=dateService.calculDate(date, OperateurEnum.Plus, 5,DateUniteEnum.Jour);
    expect(res).toEqual(dateRef);
  });

  it('test calculDate moins', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6, hour: 17, minute: 59,second:8,millisecond:176});
    const dateRef=DateTime.fromObject({year: 2022, month: 2, day: 6, hour: 17, minute: 59,second:8,millisecond:176});
    const res=dateService.calculDate(date, OperateurEnum.Moins, 2,DateUniteEnum.Mois);
    expect(res).toEqual(dateRef);
  });

  it('test isDateTime OK', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6, hour: 17, minute: 59,second:8,millisecond:176});
    const res=dateService.isDateTime(date);
    expect(res).toBeTrue();
  });

  it('test isDateTime KO', () => {
    dateService = new DateService();

    const res=dateService.isDateTime('aaa');
    expect(res).toBeFalse();
  });

  it('test calculDifference jours', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6});
    const date2=DateTime.fromObject({year: 2022, month: 4, day: 20});
    const res=dateService.calculDifference(date, date2, DateUniteEnum.Jour);
    expect(res).toEqual("14 jours");
  });

  it('test calculDifference mois', () => {
    dateService = new DateService();

    const date=DateTime.fromObject({year: 2022, month: 4, day: 6});
    const date2=DateTime.fromObject({year: 2022, month: 6, day: 6});
    const res=dateService.calculDifference(date, date2, DateUniteEnum.Mois);
    expect(res).toEqual("2 mois");
  });


});
