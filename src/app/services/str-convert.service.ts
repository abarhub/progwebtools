import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrConvertService {

  /**
   * remplace \ par /
   * @param str
   */
  public convertBackSlashToSlash(str: string): string {
    return str.replace(/\\/g, '/');
  }

  /**
   * remplace / par \\
   * @param str
   */
  public convertSlashToBackslash(str: string): string {
    return str.replace(/\//g, '\\');
  }

  /**
   * remplacer les \ par \\
   * @param str
   */
  public doubleBackslash(str: string): string {
    return str.replace(/\\/g, '\\\\');
  }

  /**
   * remplacer les \\ par \
   * @param str
   */
  public removeDoubleBackslash(str: string): string {
    return str.replace(/\\\\/g, '\\');
  }

  /**
   * encode url
   * encodage d'une url : https://www.google.com/suité => https://www.google.com/suit%A9
   *
   * @param str
   */
  public encodeUrl(str: string): string {
    return encodeURI(str);
  }

  /**
   * encode param url
   * @param str
   */
  public encodeParamUrl(str: string): string {
    return encodeURIComponent(str);
  }

  public encodeHtml(str: string): string {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
    //return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  public decodeHtml(str: string): string {
    //return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    let txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  /**
   * Convertit une chaîne de caractères en format compatible avec les fichiers .properties Java
   * Encode les caractères accentués et spéciaux en séquences Unicode \uXXXX
   */
  public encodeToPropertiesFormat(str: string): string {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const code = str.charCodeAt(i);

      // Les caractères ASCII imprimables de base (32-126) sauf certains spéciaux
      if (code >= 32 && code <= 126) {
        // Échapper les caractères spéciaux
        if (char === '\\') {
          result += '\\\\';
        } else if (char === '=') {
          result += '\\=';
        } else if (char === ':') {
          result += '\\:';
        } else if (char === '#') {
          result += '\\#';
        } else if (char === '!') {
          result += '\\!';
        } else if (char === '\'') {
          if (i + 1 < str.length) {
            if (str.charAt(i + 1) === '\'') {
              result += '\'\'';
              i++;
            } else {
              result += '\'\'';
            }
          } else {
            result += char;
          }
        } else {
          result += char;
        }
      } else {
        // Encoder en Unicode pour tous les autres caractères (accentués, etc.)
        result += '\\u' + code.toString(16).padStart(4, '0');
      }
    }

    return result;
  }

  /**
   * Décode une chaîne au format .properties Java vers du texte normal
   * Convertit les séquences Unicode \uXXXX en caractères réels
   */
  public decodeFromPropertiesFormat(str: string): string {
    let result = '';
    let i = 0;

    while (i < str.length) {
      if (str[i] === '\\' && i + 1 < str.length) {
        const nextChar = str[i + 1];

        // Séquence Unicode \uXXXX
        if (nextChar === 'u' && i + 5 < str.length) {
          const hexCode = str.substring(i + 2, i + 6);
          // Vérifier que c'est bien un code hexa valide
          if (/^[0-9a-fA-F]{4}$/.test(hexCode)) {
            result += String.fromCharCode(parseInt(hexCode, 16));
            i += 6;
            continue;
          }
        }

        // Caractères échappés
        if (nextChar === '\\') {
          result += '\\';
          i += 2;
        } else if (nextChar === '=') {
          result += '=';
          i += 2;
        } else if (nextChar === ':') {
          result += ':';
          i += 2;
        } else if (nextChar === '#') {
          result += '#';
          i += 2;
        } else if (nextChar === '!') {
          result += '!';
          i += 2;
        } else if (nextChar === 'n') {
          result += '\n';
          i += 2;
        } else if (nextChar === 't') {
          result += '\t';
          i += 2;
        } else if (nextChar === 'r') {
          result += '\r';
          i += 2;
        } else {
          // Si le caractère après \ n'est pas reconnu, on garde le \
          result += str[i];
          i++;
        }
      } else if (str[i] === '\'') {
        if (i + 1 < str.length && str[i + 1] === '\'') {
          result += '\'';
          i += 2;
        } else {
          result += '\'';
          i++;
        }
      } else {
        result += str[i];
        i++;
      }
    }

    return result;
  }

  /**
   * Supprime les accents d'une chaîne de caractères
   * @param str la chaine ou il faut enlever les accents
   */
  public removeAccent(str: string): string {
    return str.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");
  }

  /**
   * Formate un json non formaté
   * @param str le json non formaté
   */
  public jsonNonFormate(str: string): string {
    return JSON.stringify(JSON.parse(str));
  }

  /**
   * découpe une chaine de caractères en mots
   * @param str la chaine à découper
   */
  public decoupeMots(str: string): string[] {
    let listeMots = [];
    let motCourant = '';
    str = str.normalize("NFD")                  // Décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, "");  // Supprime les accents
    for (let i = 0; i < str.length; i++) {
      if (this.finMot(str, i)) {
        if (motCourant !== '') {
          listeMots.push(motCourant);
          motCourant = '';
        }
      } else if (this.finMotCamelCase(str, i)) {
        if (motCourant !== '') {
          listeMots.push(motCourant);
          motCourant = '';
        }
        motCourant = str[i];
      } else {
        motCourant += str[i];
      }
    }
    if (motCourant !== '') {
      listeMots.push(motCourant);
    }
    return listeMots;
  }

  /**
   * détecte si le caractère à l'indice i est la fin d'un mot
   * par exemple :
   * "un Test SIMPLE",0 => false
   * "un Test SIMPLE",1 => false
   * "un Test SIMPLE",2 => true
   * @param str la chaine de caractères
   * @param i la position dans le mot à tester
   */
  public finMot(str: string, i: number): boolean {
    if (i >= 0 && i < str.length) {
      if (!str[i].match(/[a-zA-Z0-9]/)) {
        // les mots avec séparateur : un Test SIMPLE
        return true;
      }
    }
    return false;
  }

  /**
   * détecte si le caractère à l'indice i est la fin d'un mot en camelCase
   * par exemple :
   * "unTestSimple",0 => false
   * "unTestSimple",1 => false
   * "unTestSimple",2 => true
   * @param str la chaine de caractères
   * @param i la position dans le mot à tester
   */
  public finMotCamelCase(str: string, i: number): boolean {
    if (i >= 0 && i < str.length) {
      if (i - 1 >= 0
        && str[i - 1].match(/[a-z]/)
        && str[i].match(/[A-Z]/)) {
        // pour les mots en camelcase : unTestSimple
        return true;
      }
    }
    return false;
  }

  /**
   * Convertit une chaîne de caractères en camelCase
   * @param str la chaîne à convertir
   */
  public versCamelCase(str: string): string {
    let mots = this.decoupeMots(str);
    let resultat = '';
    for (let i = 0; i < mots.length; i++) {
      if (i === 0) {
        resultat += mots[i].toLowerCase();
      } else {
        resultat += mots[i].charAt(0).toUpperCase() + mots[i].slice(1).toLowerCase();
      }
    }
    return resultat;
  }

  /**
   * Convertit une chaîne de caractères en UPPER_CASE
   * @param str la chaîne à convertir
   */
  public versUpperCase(str: string): string {
    let mots = this.decoupeMots(str);
    let resultat = '';
    for (let i = 0; i < mots.length; i++) {
      if (resultat.length > 0) {
        resultat += '_';
      }
      resultat += mots[i].toUpperCase();
    }
    return resultat;
  }

  /**
   * convertit une chaine en snake_case
   * @param str
   */
  public versSnakeCase(str: string): string {
    let mots = this.decoupeMots(str);
    let resultat = '';
    for (let i = 0; i < mots.length; i++) {
      if (resultat.length > 0) {
        resultat += '_';
      }
      resultat += mots[i].toLowerCase();
    }
    return resultat;
  }

  public versKebabCase(str: string): string {
    let mots = this.decoupeMots(str);
    let resultat = '';
    for (let i = 0; i < mots.length; i++) {
      if (resultat.length > 0) {
        resultat += '-';
      }
      resultat += mots[i].toLowerCase();
    }
    return resultat;
  }

}
