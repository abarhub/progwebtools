import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {PageEnum} from "../entity/page.enum";
import {PageInterface} from "../entity/page.interface";
import {ConversionComponent} from "../conversion/conversion/conversion.component";
import {PageModel} from "../entity/page.model";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()
  addNewTab: Subject<PageEnum> = new Subject();

  tabList: PageInterface[] = [];
  tabListName: PageModel[] = [];
  private compteur: number = 1;

  public readonly PageEnum: typeof PageEnum = PageEnum;

  constructor() {
  }

  ngOnInit(): void {
    this.addNewTab.subscribe(value => {
      const page = new PageModel();
      page.typePage = value;
      page.titre = 'Page ' + this.compteur;
      this.compteur++;
      this.tabListName.push(page);
    });
  }

}
