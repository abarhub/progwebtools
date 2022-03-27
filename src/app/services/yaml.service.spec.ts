import {YamlService} from "./yaml.service";

describe('Test YamlService', () => {
  let yamlService: YamlService;

  it('simple test', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: aaa")).toBe('key1=aaa\n');
  });

  it('simple test with number', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: 15")).toBe('key1=15\n');
  });

  it('simple test with multiple key', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: val1\nkey2: val2\nkey3.tmp: val3")).toBe('key1=val1\nkey2=val2\nkey3.tmp=val3\n');
  });

  it('simple test with multiple key and multiple values', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: aaa\n" +
      "key2: bbb\n" +
      "key3: 'xxx'\n" +
      "key4:\n" +
      "key5: 15\n" +
      "key6: ddd, kkk, mmm\n")).toBe('key1=aaa\n' +
      'key2=bbb\n' +
      'key3=xxx\n' +
      'key4=\n' +
      'key5=15\n' +
      'key6=ddd, kkk, mmm\n');
  });

  it('simple test with multiple key and spaces', () => {
    yamlService = new YamlService();
    const param = "key1:\n" +
      "  key2: xxx\n" +
      "  key3: yyy\n" +
      "  key4:\n" +
      "    key5: zzz\n" +
      "    key6: ttt\n" +
      "  key7: vvv\n" +
      "  key8: mmm\n" +
      "key9: ccc\n" +
      "key10: sss\n";
    const result = 'key1.key2=xxx\n' +
      'key1.key3=yyy\n' +
      'key1.key4.key5=zzz\n' +
      'key1.key4.key6=ttt\n' +
      'key1.key7=vvv\n' +
      'key1.key8=mmm\n' +
      'key9=ccc\n' +
      'key10=sss\n';
    const res = yamlService.toProperties(param);
    expect(res).toBe(result);
  });

  it('simple test with empty', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: ")).toBe('key1=\n');
  });

  it('simple test with comment', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: aa\n# comment\nkey2: bbb # comment 2\nkey3: ccc")).toBe('key1=aa\nkey2=bbb\nkey3=ccc\n');
  });

  it('simple test with true/false', () => {
    yamlService = new YamlService();
    expect(yamlService.toProperties("key1: true\nkey2: false\nkey3: abc")).toBe('key1=true\nkey2=false\nkey3=abc\n');
  });

});
