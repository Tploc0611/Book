
import React, { useState, useCallback, useEffect, useRef, useContext } from 'react';
import { BOOK_PAGES, THE_BOOK_TITLE } from './constants/bookData';
import { PageData } from './types';
import BookWrapper from './components/BookWrapper';
import TableOfContents from './components/TableOfContents';
import MenuIcon from './components/icons/MenuIcon';
import SettingsIcon from './components/icons/SettingsIcon';
import { SettingsProvider, SettingsContext } from './contexts/SettingsContext';
import SettingsPanel from './components/SettingsPanel';

export interface ChapterContextValue {
  pagesInCurrentChapter: PageData[];
  currentPageWithinChapter: number; // 1-based index
  totalChapterPages: number;
  chapterTitle: string;
}

const AppContent: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const settingsContext = useContext(SettingsContext);

  const [chapterContextValue, setChapterContextValue] = useState<ChapterContextValue | null>(null);

  const totalPages = BOOK_PAGES.length;

  const goToNextPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const goToPage = useCallback((index: number) => {
    if (index >= 0 && index < totalPages) {
      setCurrentPageIndex(index);
    }
  }, [totalPages]);

  const toggleToc = useCallback(() => {
    setIsTocOpen((prev) => !prev);
  }, []);

  const toggleSettingsPanel = useCallback(() => {
    setIsSettingsPanelOpen((prev) => !prev);
  }, []);

  const currentPageData: PageData | undefined = BOOK_PAGES[currentPageIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTocOpen || isSettingsPanelOpen) {
        if (event.key === 'Escape') {
            if (isSettingsPanelOpen) setIsSettingsPanelOpen(false);
            else if (isTocOpen) setIsTocOpen(false);
          }
        return;
      }

      if (event.key === 'ArrowLeft') {
        goToPreviousPage();
      } else if (event.key === 'ArrowRight') {
        goToNextPage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPreviousPage, goToNextPage, isTocOpen, isSettingsPanelOpen]);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [currentPageIndex]);
  
  useEffect(() => {
    if (!currentPageData || !currentPageData.chapterTitle) {
      setChapterContextValue(null);
      return;
    }
    const currentChapterPages = BOOK_PAGES.filter(p => p.chapterTitle === currentPageData.chapterTitle);
    if (currentChapterPages.length === 0) {
      setChapterContextValue(null);
      return;
    }
    
    const firstPageOfChapterGlobalIndex = BOOK_PAGES.findIndex(p => p.id === currentChapterPages[0].id);
    const pageIdxInChapter = currentPageIndex - firstPageOfChapterGlobalIndex;

    setChapterContextValue({
      pagesInCurrentChapter: currentChapterPages,
      currentPageWithinChapter: pageIdxInChapter + 1, // 1-based
      totalChapterPages: currentChapterPages.length,
      chapterTitle: currentPageData.chapterTitle,
    });
  }, [currentPageIndex, currentPageData]);


  // Swipe navigation logic
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50; // Minimum distance for a swipe
  const MAX_VERTICAL_THRESHOLD = 75; // Maximum vertical distance allowed for a horizontal swipe

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    if (isTocOpen || isSettingsPanelOpen || event.touches.length > 1) {
        touchStartXRef.current = null; // Reset if modals open or multi-touch
        touchStartYRef.current = null;
        return;
    }
    touchStartXRef.current = event.touches[0].clientX;
    touchStartYRef.current = event.touches[0].clientY;
  }, [isTocOpen, isSettingsPanelOpen]);

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    if (isTocOpen || isSettingsPanelOpen || !touchStartXRef.current || !touchStartYRef.current) {
      return;
    }
    // Optional: Could add logic here to prevent default scroll if swipe is predominantly horizontal
    // const touchCurrentX = event.touches[0].clientX;
    // const deltaX = touchCurrentX - touchStartXRef.current;
    // const touchCurrentY = event.touches[0].clientY;
    // const deltaY = touchCurrentY - touchStartYRef.current!;
    // if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //   event.preventDefault();
    // }
  }, [isTocOpen, isSettingsPanelOpen]);

  const handleTouchEnd = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    if (isTocOpen || isSettingsPanelOpen || !touchStartXRef.current || !touchStartYRef.current || event.changedTouches.length === 0) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaY) < MAX_VERTICAL_THRESHOLD) {
      if (deltaX < 0) { // Swipe Left
        goToNextPage();
      } else { // Swipe Right
        goToPreviousPage();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  }, [isTocOpen, isSettingsPanelOpen, goToNextPage, goToPreviousPage, SWIPE_THRESHOLD, MAX_VERTICAL_THRESHOLD]);


  const fontClass = settingsContext ? `font-${settingsContext.fontFamily}` : 'font-inter';

  return (
    <div className={`h-screen bg-sky-50 text-slate-900 selection:text-sky-700 selection:bg-transparent flex flex-col lg:flex-row overflow-hidden dark:bg-slate-900 dark:text-slate-200 ${fontClass}`}>
      <TableOfContents
        isOpen={isTocOpen}
        onClose={toggleToc}
        pages={BOOK_PAGES}
        currentPageIndex={currentPageIndex}
        onNavigate={goToPage}
        bookTitle={THE_BOOK_TITLE}
        onToggleSettingsPanel={toggleSettingsPanel}
      />
      
      <SettingsPanel isOpen={isSettingsPanelOpen} onClose={toggleSettingsPanel} />

      <div 
        ref={mainContentRef} 
        className="flex-1 flex flex-col overflow-y-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <header className="lg:hidden sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-20 p-3 sm:p-4 flex items-center justify-between dark:bg-slate-800/80 dark:text-slate-200">
          <div className="flex-1 min-w-0 overflow-hidden">
            <span className="block text-base sm:text-lg font-semibold text-sky-700 dark:text-sky-400 truncate">
              {currentPageData?.chapterTitle || THE_BOOK_TITLE}
            </span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={toggleSettingsPanel}
              className="flex-shrink-0 p-2 rounded-lg text-slate-600 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus-visible:ring-offset-slate-800/80"
              aria-label="Open display settings"
            >
              <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={toggleToc}
              className="flex-shrink-0 p-2 rounded-lg text-slate-600 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus-visible:ring-offset-slate-800/80"
              aria-label="Open table of contents"
            >
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </header>

        <main className="flex-grow w-full p-4 sm:p-6 md:p-8">
          {currentPageData && (
            <BookWrapper
              key={currentPageIndex} 
              pageData={currentPageData}
              currentPageNumber={currentPageIndex + 1}
              totalPages={totalPages}
              onNextPage={goToNextPage}
              onPreviousPage={goToPreviousPage}
              isFirstPage={currentPageIndex === 0}
              isLastPage={currentPageIndex === totalPages - 1}
              chapterContext={chapterContextValue} 
            />
          )}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <SettingsProvider>
    <AppContent />
  </SettingsProvider>
);

export default App;
