import {
  createComponentFactory,
  mockProvider,
  Spectator
} from '@ngneat/spectator/jest';

import { ApiService } from '@/services/api.service';
import { DateService } from '@/services/date.service';

import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
  let spectator: Spectator<FirstComponent>;
  let dateService: DateService;
  let apiService: ApiService;

  const createComponent = createComponentFactory({
    component: FirstComponent,
    // Mocks all functions from the given providers
    mocks: [ApiService],
    detectChanges: false,
    providers: [
      // As a best practice, try to use an empty object as value and for each
      // test mock functions
      mockProvider(DateService, {})
    ]
  });

  beforeEach(() => {
    spectator = createComponent();

    dateService = spectator.inject(DateService);
    apiService = spectator.inject(ApiService);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should call isPastDate and throwError on init', () => {
    dateService.isPastDate = jest.fn();
    // throwError is automatically mocked by passing ApiService to the 'mocks'
    // array

    spectator.detectChanges();

    expect(dateService.isPastDate).toHaveBeenCalledTimes(1);
    // throwError as has been mocked, should not throw error
    expect(apiService.throwError).toHaveBeenCalledTimes(1);
  });
});
