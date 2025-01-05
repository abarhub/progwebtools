import {Component, OnInit, Sanitizer, SecurityContext} from '@angular/core';
import {FilesService} from "../../services/files.service";
import {FileContent} from "../entity/fileContent";
import {DomSanitizer} from "@angular/platform-browser";
import {FileSaverService} from "ngx-filesaver";


@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.css'],
    standalone: false
})
export class FilesComponent implements OnInit {

  fileName: string = '';
  url: string = '';
  fileList: string[] = [];
  compteur: number = 1;

  constructor(public filesService: FilesService, private sanitizer: DomSanitizer, private fileSaverService: FileSaverService) {
  }

  ngOnInit(): void {
    // const text='abc';
    // const blob = new Blob([text], {type: 'application/json'});
    // const blobUrl = URL.createObjectURL(blob);
    // //const safeblobUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
    // const safeblobUrl =  this.sanitizer.sanitize(SecurityContext.URL,blobUrl);
    // if(safeblobUrl) {
    //   this.url = safeblobUrl;
    // }
  }

  onFileSelected($event: Event, nom: string) {
    const element = $event.currentTarget as HTMLInputElement;
    if (element && element.files && element.files.length > 0) {

      const file: File = element.files[0];

      if (file) {
        console.log(file.name);
        console.log(file);
        let istext: boolean = false;
        istext = (<HTMLInputElement>document.getElementById("text_" + nom)).checked;
        if (!istext) {
          file.arrayBuffer().then((x) => {
            const f: FileContent = new FileContent();
            f.name = file.name;
            f.arrayBuffer = x;
            f.isText = false;
            this.filesService.put(nom, f);
          });
        } else {
          file.text().then((x) => {
            const f: FileContent = new FileContent();
            f.name = file.name;
            f.text = x;
            f.isText = true;
            this.filesService.put(nom, f);
          });
        }
      }

    }
  }

  download(nom: string) {

    if (nom) {
      if (this.filesService.has(nom)) {
        const tmp = this.filesService.get(nom);
        if (tmp) {
          let blob;
          if (tmp.isText) {
            const text: string = tmp.text;
            blob = new Blob([text], {type: 'application/octet-stream'});
          } else {
            const arrayBuffer = tmp.arrayBuffer;
            blob = new Blob([arrayBuffer], {type: 'application/octet-stream'});
          }
          const filename = tmp.name || 'doc.txt';
          this.fileSaverService.save(blob, filename);
        }
      }
    }
  }

  ajout() {
    let nom = 'file' + this.compteur;
    this.compteur++;
    if (this.filesService.has(nom)) {
      while (this.filesService.has(nom)) {
        nom = 'file' + this.compteur;
        this.compteur++;
      }
    }
    this.fileList.push(nom);
  }
}
