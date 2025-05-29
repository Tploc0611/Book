
import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import { ChapterContextValue } from '../App';

interface PageContentProps {
  title?: string;
  paragraphs: string[];
  isCover?: boolean;
  chapterContext: ChapterContextValue | null;
}

// Explicit text size classes for the main article content's base font size
const ARTICLE_TEXT_SIZE_CLASSES = [
  'text-sm', // Level 0
  'text-base', // Level 1 (default)
  'text-lg', // Level 2
  'text-xl', // Level 3
  'text-2xl' // Level 4
];

// Explicit text size classes for the cover page H1
const COVER_H1_TEXT_SIZE_CLASSES = [
  'text-3xl md:text-4xl', // Level 0
  'text-4xl md:text-5xl', // Level 1 (default)
  'text-5xl md:text-6xl', // Level 2
  'text-6xl md:text-7xl', // Level 3
  'text-7xl md:text-8xl'  // Level 4
];

// Explicit text size classes for the cover page paragraphs
const COVER_P_TEXT_SIZE_CLASSES = [
  'text-base md:text-lg',   // Level 0
  'text-lg md:text-xl',   // Level 1 (default)
  'text-xl md:text-2xl',   // Level 2
  'text-2xl md:text-3xl',  // Level 3
  'text-3xl md:text-4xl'   // Level 4
];

// Letter spacing classes
const LETTER_SPACING_CLASSES = [
  'tracking-tight', // Level 0
  'tracking-normal',// Level 1 (default)
  'tracking-wide'   // Level 2
];

// Line height classes
const LINE_HEIGHT_CLASSES = [
  'leading-tight',  // Level 0 
  'leading-normal', // Level 1 (default)
  'leading-relaxed',// Level 2
  'leading-loose'   // Level 3
];


const PageContent: React.FC<PageContentProps> = ({ title, paragraphs, isCover = false, chapterContext }) => {
  const settings = useContext(SettingsContext);

  const currentFontSizeLevel = settings ? settings.fontSizeLevel : 1;
  const articleTextSizeClass = ARTICLE_TEXT_SIZE_CLASSES[currentFontSizeLevel];
  const coverH1TextSizeClass = COVER_H1_TEXT_SIZE_CLASSES[currentFontSizeLevel];
  const coverPTextSizeClass = COVER_P_TEXT_SIZE_CLASSES[currentFontSizeLevel];
  
  const currentLetterSpacingLevel = settings ? settings.letterSpacingLevel : 1;
  const letterSpacingClass = LETTER_SPACING_CLASSES[currentLetterSpacingLevel];

  const currentLineHeightLevel = settings ? settings.lineHeightLevel : 1;
  const lineHeightClass = LINE_HEIGHT_CLASSES[currentLineHeightLevel];
  
  const fontFamilyClass = settings ? `font-${settings.fontFamily}` : 'font-inter';

  if (isCover) {
    // For cover page, we might want to control letter spacing and line height differently
    // or not apply them. For now, only font size and family are applied.
    return (
      <div className={`flex flex-col items-center justify-center h-full text-center py-10 ${fontFamilyClass} page-transition-enter`}>
        {title && (
          <h1 className={`font-bold text-sky-700 dark:text-sky-400 mb-4 ${coverH1TextSizeClass}`}>
            {title}
          </h1>
        )}
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className={`mt-2 ${index === 0 ? 'font-semibold text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'} ${coverPTextSizeClass}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col page-transition-enter">
      { chapterContext && chapterContext.chapterTitle && (
         <p className="text-sm text-sky-700 dark:text-sky-400 font-medium mb-3">
            {chapterContext.chapterTitle}
          </p>
      )}
      <article 
        className={`prose prose-slate dark:prose-invert max-w-none 
                    prose-headings:text-slate-800 dark:prose-headings:text-slate-200 
                    prose-p:text-slate-700 dark:prose-p:text-slate-300 
                    ${articleTextSizeClass} ${fontFamilyClass} ${letterSpacingClass} ${lineHeightClass}`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-sky-700 dark:!text-sky-400 mb-8 md:mb-10">
            {title}
          </h2>
        )}
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="mb-4 md:mb-5 text-left" 
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </article>
    </div>
  );
};

export default PageContent;