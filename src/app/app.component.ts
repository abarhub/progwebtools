import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {PageEnum} from "./modules/entity/page.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'progwebtools';
  addNewTabSubject: Subject<PageEnum> = new Subject();
  public readonly PageEnum : typeof PageEnum = PageEnum;

  constructor() {
  }

  onSubmit() {

  }

  ngOnInit(): void {

  }

  addNewPage(page: PageEnum): void {
    this.addNewTabSubject.next(page);
  }

}
