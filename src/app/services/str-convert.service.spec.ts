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

});
