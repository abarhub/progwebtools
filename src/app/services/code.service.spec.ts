import {TestBed} from '@angular/core/testing';

import {CodeService} from './code.service';

describe('CodeService', () => {
  let service: CodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test execute simple', () => {
    const res = service.execute("return 1+2;");
    expect(res).toEqual(3);
  });

  it('test execute simple2', () => {
    const s = 'let i=1;\n' +
      'console.log(\'coucou\');\n' +
      'for(let j=0;j<5;j++){\n' +
      '  i=i+1;\n' +
      '}\n' +
      'return i;';
    const res = service.execute(s);
    expect(res).toEqual(6);
  });

  it('test execute context datetime', () => {
    const s = 'return context.getDateLocal(2022,3,14,10,6).toFormat(\'yyyy-MM-dd\\\'T\\\'HH:mm:ss.SSS\');';
    const res = service.execute(s);
    expect(res).toEqual('2022-03-14T10:06:00.000');
  });

});
