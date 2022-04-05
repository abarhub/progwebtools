import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {PageEnum} from "../entity/page.enum";
import {PageModel} from "../entity/page.model";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()
  addNewTab: Subject<PageEnum> = new Subject();

  @Input()
  closeTab: Subject<void> = new Subject();

  //tabList: PageInterface[] = [];
  tabListName: PageModel[] = [];
  private compteurConversion: number = 1;
  private compteurCode: number = 1;
  private compteurNote: number = 1;
  private compteur: number = 1;
  private indexSelected: number = -1;

  public readonly PageEnum: typeof PageEnum = PageEnum;

  constructor() {
  }

  ngOnInit(): void {
    this.addNewTab.subscribe(value => {
      const page = new PageModel();
      page.typePage = value;
      if (value === PageEnum.Conversion) {
        page.titre = 'Conv ' + this.compteurConversion;
        this.compteurConversion++;
      } else if (value === PageEnum.Code) {
        page.titre = 'Code ' + this.compteurCode;
        this.compteurCode++;
      } else if (value === PageEnum.Notes) {
        page.titre = 'Note ' + this.compteurNote;
        this.compteurNote++;
      } else {
        page.titre = 'Page ' + this.compteur;
        this.compteur++;
      }
      this.tabListName.push(page);
    });

    this.closeTab.subscribe(value => {
      const indexToDelete = this.indexSelected;
      if (indexToDelete >= 0 && indexToDelete < this.tabListName.length) {
        this.tabListName.splice(indexToDelete, 1);
      }
    });
  }

  tabChanged($event: MatTabChangeEvent): void {
    if ($event.index >= 0 && $event.index < this.tabListName.length) {
      this.indexSelected = $event.index;
    }
  }
}
