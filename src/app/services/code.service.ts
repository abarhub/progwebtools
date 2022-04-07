import {Injectable} from '@angular/core';
import {ContextExecutionService} from "./contextExecution.service";
import {FilesService} from "./files.service";

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private contextExecutionService: ContextExecutionService) {
  }

  execute(code: string) {
    const context = this.contextExecutionService;
    const func = Function('context', '"use strict";' + code);
    console.log('execution...');
    const res = func(context);
    return res;
  }
}
