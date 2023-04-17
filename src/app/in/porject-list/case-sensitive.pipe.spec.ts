import { CaseSensitivePipe } from './case-sensitive.pipe';

describe('CaseSensitivePipe', () => {
  it('create an instance', () => {
    const pipe = new CaseSensitivePipe();
    expect(pipe).toBeTruthy();
  });
});
