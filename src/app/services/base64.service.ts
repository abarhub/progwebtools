import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  private toBinary(s: string): string {
    const codeUnits = new Uint16Array(s.length);
    for (let i = 0; i < codeUnits.length; i++) {
      codeUnits[i] = s.charCodeAt(i);
    }
    const charCodes = new Uint8Array(codeUnits.buffer);
    let result = '';
    for (let i = 0; i < charCodes.byteLength; i++) {
      result += String.fromCharCode(charCodes[i]);
    }
    return result;
  }

  private fromBinary(binary: string): string {
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const charCodes = new Uint16Array(bytes.buffer);
    let result = '';
    for (let i = 0; i < charCodes.length; i++) {
      result += String.fromCharCode(charCodes[i]);
    }
    return result;
  }

  private utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  private b64_to_utf8(str: string) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  toBase64(s: string, binary: boolean = false): string {
    const converted = this.utf8_to_b64(s);
    if (binary) {
      const encoded = btoa(converted);
      return encoded;
    } else {
      return converted;
    }
  }

  fromBase64(encoded: string, binary: boolean = false): string {
    const decoded = this.b64_to_utf8(encoded);
    if (binary) {
      const original = this.fromBinary(decoded);
      return original;
    } else {
      return decoded;
    }
  }
}
