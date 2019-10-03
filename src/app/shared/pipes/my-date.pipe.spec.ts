import {MyDatePipe} from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe = null;

  beforeEach(() => {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should works', () => {
    const input = 'Wed Oct 03 2222 10:30:21 GMT+0200 (czas środkowoeuropejski standardowy)';
    const transform = pipe.transform(input);
    expect(transform).toEqual('3 października 2222, 10:30');
  });

  it('should return empty string for falsy values', () => {
    const inputs = [false, '', 0, null, undefined, NaN];
    inputs.forEach((input) => {
      const transform = pipe.transform(input as string);
      expect(transform).toEqual('');
    });
  });

  it('should return empty string for non date-strings', () => {
    const transform = pipe.transform('ABC');
    expect(transform).toEqual('');
  });
});
