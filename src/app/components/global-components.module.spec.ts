import { GlobalComponentsModule } from './global-components.module';

describe('GlobalComponentsModule', () => {
  let globalComponentsModule: GlobalComponentsModule;

  beforeEach(() => {
    globalComponentsModule = new GlobalComponentsModule();
  });

  it('should create an instance', () => {
    expect(globalComponentsModule).toBeTruthy();
  });
});
