import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  parseJwt(token: string): string {
    if (!token || !token.includes('.')) {
      return '';
    }
    let tab = token.split('.');
    if (tab && tab.length >= 2) {
      let resultat = '';
      resultat += "==== Header ====\n";
      resultat += this.decode(tab[0])+"\n";
      resultat += "==== Payload ====\n";
      resultat += this.decode(tab[1])+"\n";
      resultat += "==== Signature ====\n";
      resultat += tab[2];
      return resultat;
    } else {
      return '';
    }
  }

  private decode(base64Url: string): string {
    if (!base64Url) {
      return '';
    } else {
      try {
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        let obj = JSON.parse(jsonPayload);
        return JSON.stringify(obj,null,"\t");
      }catch (e) {
        return 'Error: ' + e + '\n';
      }
    }
  }

}
