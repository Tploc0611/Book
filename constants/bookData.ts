import { PageData } from '../types';
import { marketingChapter1Pages } from './chapter1Data';
import { marketingChapter2Pages } from './chapter2Data';
import { marketingChapter3Pages } from './chapter3Data';
import { marketingChapter4Pages } from './chapter4Data';
import { marketingChapter5Pages } from './chapter5Data';
import { marketingChapter6Pages } from './chapter6Data';

export const THE_BOOK_TITLE = "Interactive Textbook";

export const BOOK_PAGES: PageData[] = [
  ...marketingChapter1Pages,
  ...marketingChapter2Pages,
  ...marketingChapter3Pages,
  ...marketingChapter4Pages,
  ...marketingChapter5Pages,
  ...marketingChapter6Pages,
];
