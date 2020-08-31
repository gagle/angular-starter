import { createService } from '@ngneat/spectator/jest';
import mockDate from 'mockdate';

import { DateService } from './date.service';

describe('DateService', () => {
  const spectator = createService({
    service: DateService
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('isPastDate', () => {
    it('should check wether the given date is from the past', () => {
      // Mock new Date() with the following date
      mockDate.set(new Date('2020-01-01T00:00:00.000Z'));

      const isPastDate = spectator.service.isPastDate(
        new Date('2019-01-01T00:00:00.000Z')
      );

      expect(isPastDate).toEqual(true);

      mockDate.reset();
    });
  });
});
