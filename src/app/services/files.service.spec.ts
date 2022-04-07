import {TestBed} from '@angular/core/testing';

import {FilesService} from './files.service';
import {FileContent} from "../modules/entity/fileContent";

describe('FilesService', () => {
  let service: FilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test put', () => {
    const f: FileContent = new FileContent();
    f.name = 'test1';
    service.put('aaa', f);
    expect(service.get('aaa')?.name).toEqual('test1');
  });
});
