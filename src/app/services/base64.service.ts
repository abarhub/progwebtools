import {Injectable} from "@angular/core";
import {Base64} from "./Base64";

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  base64: Base64 = new Base64()

  toBase64(s: string): string {
    return this.base64.encode(s);
  }

  fromBase64(encoded: string): string {
    return this.base64.decode(encoded);
  }

}
