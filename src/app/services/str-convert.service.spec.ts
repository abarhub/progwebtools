import {TestBed} from '@angular/core/testing';

import {StrConvertService} from './str-convert.service';

describe('StrConvertService', () => {
  let service: StrConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('back slash to slash', () => {
    expect(service.convertBackSlashToSlash("aaa\\bbb")).toBe("aaa/bbb");
    expect(service.convertBackSlashToSlash("\\ddd\\fff\\")).toBe("/ddd/fff/");
  });

  it('slash to back slash', () => {
    expect(service.convertSlashToBackslash("aaa/bbb")).toBe("aaa\\bbb");
    expect(service.convertSlashToBackslash("/ddd/fff/")).toBe("\\ddd\\fff\\");
  });

  it('double back slash', () => {
    expect(service.doubleBackslash("aaa\\bbb\\ccc")).toBe("aaa\\\\bbb\\\\ccc");
    expect(service.doubleBackslash("\\ddd\\fff\\")).toBe("\\\\ddd\\\\fff\\\\");
  });

  it('remove double back slash', () => {
    expect(service.removeDoubleBackslash("aaa\\\\bbb\\ccc")).toBe("aaa\\bbb\\ccc");
    expect(service.removeDoubleBackslash("\\\\ddd\\\\fff\\\\")).toBe("\\ddd\\fff\\");
  });

  it('encodage d\'une url', () => {
    expect(service.encodeUrl("https://www.google.fr/")).toBe("https://www.google.fr/");
    expect(service.encodeUrl("https://www.wikipedia.fr/")).toBe("https://www.wikipedia.fr/");
    expect(service.encodeUrl("https://www.wikipedia.fr/c'est_tèsté")).toBe("https://www.wikipedia.fr/c'est_t%C3%A8st%C3%A9");
  });

  it('encodage d\'un parametre d\'url', () => {
    expect(service.encodeParamUrl("un exemple avec /:='")).toBe("un%20exemple%20avec%20%2F%3A%3D'");
    expect(service.encodeParamUrl("autre_exemple avec urlhttps://www.wikipedia.fr/")).toBe("autre_exemple%20avec%20urlhttps%3A%2F%2Fwww.wikipedia.fr%2F");
  });

  it('encodage html', () => {
    expect(service.encodeHtml("un test<br/><p>a lire</p>")).toBe("un test&lt;br/&gt;&lt;p&gt;a lire&lt;/p&gt;");
    expect(service.encodeUrl('autre exemple<img src="/toto.jpg" alt="imagé"/>')).toBe("autre%20exemple%3Cimg%20src=%22/toto.jpg%22%20alt=%22imag%C3%A9%22/%3E");
  });

  it('encodage properties', () => {
    expect(service.encodeToPropertiesFormat("Bonjour")).toBe("Bonjour");
    expect(service.encodeToPropertiesFormat("Café")).toBe("Caf\\u00e9");
    expect(service.encodeToPropertiesFormat("Français: àéèêëïîôù")).toBe("Fran\\u00e7ais\\: \\u00e0\\u00e9\\u00e8\\u00ea\\u00eb\\u00ef\\u00ee\\u00f4\\u00f9");
    expect(service.encodeToPropertiesFormat("Prix = 100€")).toBe("Prix \\= 100\\u20ac");
    expect(service.encodeToPropertiesFormat("Chemin\\fichier")).toBe("Chemin\\\\fichier");
    expect(service.encodeToPropertiesFormat("C'est l'été!")).toBe("C''est l''\\u00e9t\\u00e9\\!");
    expect(service.encodeToPropertiesFormat("c'est")).toBe("c''est");
    expect(service.encodeToPropertiesFormat("c'est qu''un exemple")).toBe("c''est qu''un exemple");
  });

  it('décodage properties', () => {
    expect(service.decodeFromPropertiesFormat("Bonjour")).toBe("Bonjour");
    expect(service.decodeFromPropertiesFormat("Caf\\u00e9")).toBe("Café");
    expect(service.decodeFromPropertiesFormat("Fran\\u00e7ais\\: \\u00e0\\u00e9\\u00e8\\u00ea\\u00eb\\u00ef\\u00ee\\u00f4\\u00f9")).toBe("Français: àéèêëïîôù");
    expect(service.decodeFromPropertiesFormat("Prix \\= 100\\u20ac")).toBe("Prix = 100€");
    expect(service.decodeFromPropertiesFormat("Chemin\\\\fichier")).toBe("Chemin\\fichier");
    expect(service.decodeFromPropertiesFormat("C''est l''\\u00e9t\\u00e9\\!")).toBe("C'est l'été!");
    expect(service.decodeFromPropertiesFormat("c''est qu''un exemple")).toBe("c'est qu'un exemple");
  });

  it('suppression des accents', () => {
    expect(service.removeAccent("Bonjour")).toBe("Bonjour");
    expect(service.removeAccent("àéèùôïÿç")).toBe("aeeuoiyc");
    expect(service.removeAccent("ÀÉÈÙÔÏŸÇ")).toBe("AEEUOIYC");
    expect(service.removeAccent("abc123_:;XX$€")).toBe("abc123_:;XX$€");
  });

  it('json non formate', () => {
    expect(service.jsonNonFormate('{"abc":123,\n"aaa":\n"bbb"}')).toBe('{"abc":123,"aaa":"bbb"}');
  });

  it('fin de mot', () => {
    expect(service.finMot('un test simple', 0)).toBe(false);
    expect(service.finMot('un test simple', 1)).toBe(false);
    expect(service.finMot('un test simple', 2)).toBe(true);
    expect(service.finMot('un test simple', 3)).toBe(false);
    expect(service.finMot('un test simple', 4)).toBe(false);
    expect(service.finMot('un test simple', 5)).toBe(false);
    expect(service.finMot('un test simple', 6)).toBe(false);
    expect(service.finMot('un test simple', 7)).toBe(true);
    expect(service.finMot('un test simple', 20)).toBe(false);
    expect(service.finMot('un test simple', -1)).toBe(false);
  });

  it('fin de mot camel case', () => {
    expect(service.finMotCamelCase('unTestSimple', 0)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', 1)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', 2)).toBe(true);
    expect(service.finMotCamelCase('unTestSimple', 3)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', 4)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', 5)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', 6)).toBe(true);
    expect(service.finMotCamelCase('unTestSimple', 7)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', 20)).toBe(false);
    expect(service.finMotCamelCase('unTestSimple', -1)).toBe(false);
  });

  it('découpage des mots', () => {
    expect(service.decoupeMots('un test simple')).toEqual(['un', 'test', 'simple']);
    expect(service.decoupeMots('un Test Simple')).toEqual(['un', 'Test', 'Simple']);
    expect(service.decoupeMots('unTestSimple')).toEqual(['un', 'Test', 'Simple']);
    expect(service.decoupeMots('un_Test_Simple')).toEqual(['un', 'Test', 'Simple']);
    expect(service.decoupeMots('un_test_simple')).toEqual(['un', 'test', 'simple']);
    expect(service.decoupeMots('un-test-simple')).toEqual(['un', 'test', 'simple']);
    expect(service.decoupeMots('un-tést-simple')).toEqual(['un', 'test', 'simple']);
  });

  it('conversion en camelCase', () => {
    expect(service.versCamelCase('un test simple')).toBe("unTestSimple");
    expect(service.versCamelCase('un_test_simple')).toBe("unTestSimple");
    expect(service.versCamelCase('UN_TEST_SIMPLE')).toBe("unTestSimple");
    expect(service.versCamelCase('UN__TEST__SIMPLE')).toBe("unTestSimple");
    expect(service.versCamelCase('UN  TEST  SIMPLE')).toBe("unTestSimple");
    expect(service.versCamelCase('UN-TEST-SIMPLE')).toBe("unTestSimple");
  });

  it('conversion en UPPER_CASE', () => {
    expect(service.versUpperCase('un test simple')).toBe("UN_TEST_SIMPLE");
    expect(service.versUpperCase('unTestSimple')).toBe("UN_TEST_SIMPLE");
    expect(service.versUpperCase('un-test-simple')).toBe("UN_TEST_SIMPLE");
    expect(service.versUpperCase('un_test_simple')).toBe("UN_TEST_SIMPLE");
    expect(service.versUpperCase('UN  TEST  SIMPLE')).toBe("UN_TEST_SIMPLE");
    expect(service.versUpperCase('UN-TEST-SIMPLE')).toBe("UN_TEST_SIMPLE");
  });

  it('conversion en SNAKE_CASE', () => {
    expect(service.versSnakeCase('un test simple')).toBe("un_test_simple");
    expect(service.versSnakeCase('unTestSimple')).toBe("un_test_simple");
    expect(service.versSnakeCase('un-test-simple')).toBe("un_test_simple");
    expect(service.versSnakeCase('un_test_simple')).toBe("un_test_simple");
    expect(service.versSnakeCase('UN  TEST  SIMPLE')).toBe("un_test_simple");
    expect(service.versSnakeCase('UN-TEST-SIMPLE')).toBe("un_test_simple");
  });

  it('conversion en kebab-case', () => {
    expect(service.versKebabCase('un test simple')).toBe("un-test-simple");
    expect(service.versKebabCase('unTestSimple')).toBe("un-test-simple");
    expect(service.versKebabCase('un-test-simple')).toBe("un-test-simple");
    expect(service.versKebabCase('un_test_simple')).toBe("un-test-simple");
    expect(service.versKebabCase('UN  TEST  SIMPLE')).toBe("un-test-simple");
    expect(service.versKebabCase('UN-TEST-SIMPLE')).toBe("un-test-simple");
  });

});
