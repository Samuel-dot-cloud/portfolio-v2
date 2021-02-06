import { TestBed } from '@angular/core/testing';

import { ProjectImagesService } from './project-images.service';

describe('ProjectImagesService', () => {
  let service: ProjectImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
