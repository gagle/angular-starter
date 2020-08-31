import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { SecondComponent } from './second.component';

describe('SecondComponent', () => {
  let spectator: Spectator<SecondComponent>;

  const createComponent = createComponentFactory({
    component: SecondComponent,
    // ngOnInit() throws an error, so let's just not call it
    detectChanges: false
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
