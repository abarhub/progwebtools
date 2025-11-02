import {TestBed} from '@angular/core/testing';

import {JwtService} from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should decode JWT token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const decoded = service.parseJwt(token);
    expect(decoded).toContain('Header');
    expect(decoded).toContain('Payload');
    expect(decoded).toContain('Signature');
    expect(decoded).toEqual('==== Header ====\n' +
      '{\n' +
      '\t"alg": "HS256",\n' +
      '\t"typ": "JWT"\n' +
      '}\n' +
      '==== Payload ====\n' +
      '{\n' +
      '\t"sub": "1234567890",\n' +
      '\t"name": "John Doe",\n' +
      '\t"iat": 1516239022\n' +
      '}\n' +
      '==== Signature ====\n' +
      'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    console.log('decoded:', decoded);
  });


  it('should decode JWT token 2', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzLCJleHAiOjE3MDgzNTUxMjN9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const decoded = service.parseJwt(token);
    expect(decoded).toContain('Header');
    expect(decoded).toContain('Payload');
    expect(decoded).toContain('Signature');
    const s = '==== Header ====\n' +
      '{\n' +
      '\t"alg": "HS256",\n' +
      '\t"typ": "JWT"\n' +
      '}\n' +
      '==== Payload ====\n' +
      '{\n' +
      '\t"sub": "1234567890",\n' +
      '\t"name": "John Doe",\n' +
      '\t"iat": 1708345123,\n' +
      '\t"exp": 1708355123\n' +
      '}\n' +
      '==== Signature ====\n' +
      'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    expect(decoded).toEqual(s);
    console.log('decoded:', decoded);
    console.log('eq:', decoded === s);
  });

});
