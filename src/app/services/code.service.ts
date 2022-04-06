import {Injectable} from '@angular/core';
import {ContextExecutionService} from "./contextExecution.service";

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor() {
  }

  execute(code: string) {
    const context=new ContextExecutionService();
    const func = Function('context','"use strict";' +  code);
    console.log('execution...');
    const res = func(context);
    return res;
  }
}
