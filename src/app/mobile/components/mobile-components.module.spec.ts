import { MobileComponentsModule } from './mobile-components.module';

describe('MobileComponentsModule', () => {
  let mobileComponentsModule: MobileComponentsModule;

  beforeEach(() => {
    mobileComponentsModule = new MobileComponentsModule();
  });

  it('should create an instance', () => {
    expect(mobileComponentsModule).toBeTruthy();
  });
});
