import { PageData } from '../types';
import { chap2SecIPageData } from './chapter2/secI';
import { chap2SecIIPageData } from './chapter2/secII';
import { chap2SecIIIPageData } from './chapter2/secIII';
import { chap2SecIVPageData } from './chapter2/secIV';
import { chap2SecVPageData } from './chapter2/secV';
import { chap2SecVIPageData } from './chapter2/secVI';
// import { chap2SecVIIPageData } from './chapter2/secVII'; // Removed

export const marketingChapter2Pages: PageData[] = [
  chap2SecIPageData,
  chap2SecIIPageData,
  chap2SecIIIPageData,
  chap2SecIVPageData,
  chap2SecVPageData,
  chap2SecVIPageData,
  // chap2SecVIIPageData, // Removed
];