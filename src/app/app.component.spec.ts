import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first-component/first.component';
import { SecondComponent } from './components/second-component/second.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let onInitSecondComponentSpy: jest.Mock;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      // Mock FirstComponent as we don't want to call its ngOnInit() function
      // and call to other service's functions
      MockComponent(FirstComponent),
      SecondComponent
    ],
    /**
     * By default this is set to true so the lifecycle hooks for a component
     * (think ngOnInit) will run for each test/it block. If you set this to
     * false, you can manually trigger the change detection with
     * spectator.detectChanges() in each test/it block that you need. This will
     * allow you to mock/spy on services that might be called in the lifecycle
     * hooks before they run.
     *
     * Default value is false.
     */
    detectChanges: false,
    /**
     * When you want to only render the component under test and not any of the
     * nested components in its template. You can set this option to true so you
     * do not have to worry about mocking the nested components in the template.
     *
     * Default value is false.
     */
    shallow: false
  });

  beforeEach(() => {
    spectator = createComponent();

    // Because of the following calls to detectChanges(), app-second component
    // will be rendered but because it was not mocked with MockComponent() and
    // it throws an error during ngOnInit() it needs to be mocked first

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onInitSecondComponentSpy = spectator.query(
      SecondComponent
    )!.ngOnInit = jest.fn();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should not display any DOM element since change detection is disabled', () => {
    // Since change detection is disabled, the ngSwitch directive has not been
    // resolved and no element is rendered
    expect(spectator.query(FirstComponent)).not.toExist();
    expect(spectator.query('.no-component')).not.toExist();

    expect(spectator.query('.app-second')).toExist();
  });

  it('should display empty div on init', () => {
    spectator.detectChanges();

    // Just to assert that app-second tried to render due to the previous
    // detectChanges()
    expect(onInitSecondComponentSpy).toHaveBeenCalledTimes(1);

    expect(spectator.query(FirstComponent)).not.toExist();

    const div = spectator.query('div');
    expect(div).toHaveClass('empty');
    expect(div).toHaveText('Empty');
  });

  it('should display first-component when selected', () => {
    expect(spectator.query(FirstComponent)).not.toExist();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    spectator.query(SecondComponent)!.ngOnInit = jest.fn();

    spectator.component.selectedComponent = 1;
    spectator.detectChanges();

    expect(spectator.query(FirstComponent)).toExist();
  });
});
