import { PanelComponentsModule } from './panel-components.module';

describe('PanelComponentsModule', () => {
  let panelComponentsModule: PanelComponentsModule;

  beforeEach(() => {
    panelComponentsModule = new PanelComponentsModule();
  });

  it('should create an instance', () => {
    expect(panelComponentsModule).toBeTruthy();
  });
});
