import {Injectable} from "@angular/core";
import {load} from "js-yaml";

@Injectable({
  providedIn: 'root',
})
export class YamlService {

  toProperties(s:string):string{

    const yaml = load(s);
    console.log('yml',yaml);

    if(yaml) {

      let yaml2=yaml as any;
      for (let key in yaml2) {
        console.log("yaml key/value",key,yaml2[key]);
      }

      let res=this.conv(yaml2,'');

      console.log('res',res);

      return res;
    }

    return '';
  }

  private conv(obj:any, debut:string): string{
    let res="";
    let debutStr;
    if(debut&&debut.length>0){
      debutStr=debut+'.';
    } else {
      debutStr='';
    }
    for (let key in obj) {
      let value=obj[key];
      let ligne='';
      if(value===''){
        ligne=debutStr+key+'=';
      } else if(typeof value === 'string' || value instanceof String) {
        ligne=debutStr+key+'='+value;
      } else if(this.isObject(value)){
        let s=this.conv(value,debutStr+key);
        if(s){
          ligne=s;
        }
      }

      if(ligne) {
        res += ligne + '\n';
      }
      //console.log("yaml key/value",key,yaml2[key]);
    }
    return res;
  }

  private isObject(obj:any){
    return typeof obj === 'object' &&
    !Array.isArray(obj) &&
    obj !== null;
  }
}
