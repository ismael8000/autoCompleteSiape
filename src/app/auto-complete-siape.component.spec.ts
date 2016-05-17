import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AutoCompleteSiapeAppComponent } from '../app/auto-complete-siape.component';

beforeEachProviders(() => [AutoCompleteSiapeAppComponent]);

describe('App: AutoCompleteSiape', () => {
  it('should create the app',
      inject([AutoCompleteSiapeAppComponent], (app: AutoCompleteSiapeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'auto-complete-siape works!\'',
      inject([AutoCompleteSiapeAppComponent], (app: AutoCompleteSiapeAppComponent) => {
    expect(app.title).toEqual('auto-complete-siape works!');
  }));
});
