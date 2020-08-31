import { fakeAsync, flush } from '@angular/core/testing';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp
} from '@ngneat/spectator/jest';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let spectator: SpectatorHttp<ApiService>;

  const createHttp = createHttpFactory({
    service: ApiService
  });

  beforeEach(() => {
    spectator = createHttp();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('get', () => {
    it('should make an http call', fakeAsync(() => {
      expect.assertions(2);

      const expectedUrl = 'https://jsonplaceholder.typicode.com/posts/1';

      spectator.service.getPost().subscribe(post => {
        expect(post.body).toEqual('body');
      });

      const req = spectator.expectOne(expectedUrl, HttpMethod.GET);
      req.flush({
        userId: 'userId',
        id: 'id',
        title: 'title',
        body: 'body'
      });

      flush();
    }));
  });
});
