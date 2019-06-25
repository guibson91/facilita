import { NoNegativePipe } from './no-negative.pipe';

describe('NoNegativePipe', () => {
  it('create an instance', () => {
    const pipe = new NoNegativePipe();
    expect(pipe).toBeTruthy();
  });
});
