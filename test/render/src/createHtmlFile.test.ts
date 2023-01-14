import { describe, it, expect } from 'vitest';
import { createHtmlFile } from '@tlra/render';
import { existsSync, unlinkSync } from 'fs';

describe('createHtmlFile', () => {
  it('should create a file', async () => {
    const name = 'create-test';
    const path = createHtmlFile('<div>Hello World</div>', name);
    const fileExists = existsSync(path);
    expect(fileExists).toBeTruthy();
    unlinkSync(path);
  });
});
