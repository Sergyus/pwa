import { readFileSync } from 'fs';
import path from 'path';

export const getStyles = (loadableStats: string): string[] => {
  const stats = JSON.parse(readFileSync(loadableStats, 'utf8'));
  const createCssLink = (path: string) => {
    return `<link rel="stylesheet" type="text/css" href="/${path}" />`;
  };
  return stats.assets
    .filter((file: { name: string }) => path.extname(file.name) === '.css')
    .map((style: { name: string }) => createCssLink(style.name));
};
