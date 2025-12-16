import { ContestStatusPipe } from './contest-status.pipe';

describe('ContestStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ContestStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
