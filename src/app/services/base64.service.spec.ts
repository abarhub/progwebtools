import {YamlService} from "./yaml.service";
import {Base64Service} from "./base64.service";

describe('Test Base64Service', () => {
  let base64Service: Base64Service;

  it('simple test', () => {
    base64Service = new Base64Service();

    const str = 'abc123;: )*';
    const bufBase64 = base64Service.toBase64(str);
    const res = base64Service.fromBase64(bufBase64);
    expect(res).toBe(str);
  });

  it('simple test with big string', () => {
    base64Service = new Base64Service();

    const str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const bufBase64 = base64Service.toBase64(str);
    const res = base64Service.fromBase64(bufBase64);
    expect(res).toBe(str);
  });

  it('simple test encode', () => {
    base64Service = new Base64Service();

    const str = 'abc123;: )*';
    const bufBase64 = base64Service.toBase64(str);
    expect(bufBase64).toBe("YWJjMTIzOzogKSo=");
  });

  it('simple test decode', () => {
    base64Service = new Base64Service();

    const bufBase64 = 'YWJjMTIzOzogKSo=';
    const res = base64Service.fromBase64(bufBase64);
    expect(res).toBe("abc123;: )*");
  });


});
