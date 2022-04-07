import {Injectable} from '@angular/core';
import {FileContent} from "../modules/entity/fileContent";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private map: Map<string, FileContent> = new Map<string, FileContent>();

  constructor() {
  }

  put(name: string, content: FileContent): void {
    this.map.set(name, content);
  }

  get(name: string): FileContent | null {
    if (this.map.has(name)) {
      return this.map.get(name) || null;
    } else {
      return null;
    }
  }

  has(name: string): boolean {
    return this.map.has(name);
  }

  keys(): string[] {
    return Array.from(this.map.keys());
  }

}
