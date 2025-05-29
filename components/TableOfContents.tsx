
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PageData } from '../types';
import CloseIcon from './icons/CloseIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import ChevronUpIcon from './icons/ChevronUpIcon';
import SettingsIcon from './icons/SettingsIcon';
import SearchIcon from './icons/SearchIcon'; 
import ExpandIcon from './icons/ExpandIcon'; 
import CollapseIcon from './icons/CollapseIcon';

interface TableOfContentsProps {
  isOpen: boolean;
  pages: PageData[];
  currentPageIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
  bookTitle: string;
  onToggleSettingsPanel: () => void;
}

interface GroupedPage extends PageData {
  originalIndex: number;
}

interface ChapterGroup {
  chapterTitle: string;
  pages: GroupedPage[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  isOpen,
  pages,
  currentPageIndex,
  onNavigate,
  onClose,
  bookTitle,
  onToggleSettingsPanel,
}) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);
  const [goToPageInput, setGoToPageInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const activeTocItemRef = useRef<HTMLLIElement | null>(null);
  const tocScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const prevOpenStateRef = useRef(isOpen);
  const prevPageIndexRef = useRef(currentPageIndex);
  const prevSearchTermRef = useRef(searchTerm);

  const allChapterTitles = useMemo(() => {
    const titles = new Set<string>();
    pages.forEach(page => {
      if (page.chapterTitle) titles.add(page.chapterTitle);
    });
    return Array.from(titles);
  }, [pages]);

  const chaptersStructure = useMemo((): ChapterGroup[] => {
    const grouped: Record<string, GroupedPage[]> = {};
    pages.forEach((page, index) => {
      const chapterTitle = page.chapterTitle || "Uncategorized"; // Default for pages without chapter
      if (!grouped[chapterTitle]) {
        grouped[chapterTitle] = [];
      }
      grouped[chapterTitle].push({ ...page, originalIndex: index });
    });
    return Object.entries(grouped).map(([title, chapterPages]) => ({
      chapterTitle: title,
      pages: chapterPages,
    }));
  }, [pages]);

  const filteredChapters = useMemo(() => {
    if (!searchTerm.trim()) {
      return chaptersStructure;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return chaptersStructure
      .map(chapter => {
        const chapterTitleMatches = chapter.chapterTitle.toLowerCase().includes(lowerSearchTerm);
        const matchingPages = chapter.pages.filter(page =>
          (page.pageTitle || `Page ${page.originalIndex + 1}`).toLowerCase().includes(lowerSearchTerm) ||
          page.id.toLowerCase().includes(lowerSearchTerm) // Also search by page ID
        );
        
        if (chapterTitleMatches || matchingPages.length > 0) {
          return {
            ...chapter,
            pages: chapterTitleMatches ? chapter.pages : matchingPages 
          };
        }
        return null;
      })
      .filter(Boolean) as ChapterGroup[];
  }, [chaptersStructure, searchTerm]);

  // Effect for auto-expanding the current chapter when TOC opens or current page changes
   useEffect(() => {
    if (isOpen && !searchTerm) { 
      const currentPageData = pages[currentPageIndex];
      if (currentPageData?.chapterTitle && !expandedChapters.includes(currentPageData.chapterTitle)) {
        setExpandedChapters(prev => {
          const newExpanded = new Set(prev);
          newExpanded.add(currentPageData.chapterTitle!);
          return Array.from(newExpanded);
        });
      }
    }
  }, [isOpen, currentPageIndex, pages, searchTerm]); // expandedChapters intentionally omitted from deps to allow user manual collapse

  // Effect for scrolling the active TOC item into view
  useEffect(() => {
    const tocWasJustOpened = isOpen && !prevOpenStateRef.current;
    const pageJustChangedWhileOpen = isOpen && currentPageIndex !== prevPageIndexRef.current;
    const searchJustHappenedWhileOpen = isOpen && searchTerm !== prevSearchTermRef.current;

    if (isOpen && (tocWasJustOpened || pageJustChangedWhileOpen || searchJustHappenedWhileOpen)) {
      if (activeTocItemRef.current && tocScrollContainerRef.current) {
        const timer = setTimeout(() => {
          if (tocScrollContainerRef.current && activeTocItemRef.current) { // Re-check refs
            const tocRect = tocScrollContainerRef.current.getBoundingClientRect();
            const itemRect = activeTocItemRef.current.getBoundingClientRect();

            const isVisible =
              itemRect.top >= tocRect.top &&
              itemRect.bottom <= tocRect.bottom &&
              itemRect.left >= tocRect.left &&
              itemRect.right <= tocRect.right;

            if (!isVisible) {
              activeTocItemRef.current.scrollIntoView({ behavior: 'auto', block: 'nearest' });
            }
          }
        }, 150); // Delay to allow DOM to settle
        return () => clearTimeout(timer);
      }
    }

    prevOpenStateRef.current = isOpen;
    prevPageIndexRef.current = currentPageIndex;
    prevSearchTermRef.current = searchTerm;

  }, [isOpen, currentPageIndex, searchTerm, filteredChapters, pages]);


  const toggleChapter = (chapterTitle: string) => {
    setExpandedChapters(prev =>
      prev.includes(chapterTitle)
        ? prev.filter(ch => ch !== chapterTitle)
        : [...prev, chapterTitle]
    );
  };
  
  const expandAllChapters = () => {
    setExpandedChapters(allChapterTitles);
  };

  const collapseAllChapters = () => {
    setExpandedChapters([]);
  };

  const handleNavigation = (index: number) => {
    onNavigate(index);
    if (isOpen && window.innerWidth < 1024) { // Close TOC on mobile after navigation
        onClose();
    }
  };

  const handleGoToPage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const pageNum = parseInt(goToPageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= pages.length) {
      handleNavigation(pageNum - 1);
      setGoToPageInput('');
    } else {
      alert(`Please enter a page number between 1 and ${pages.length}.`);
      setGoToPageInput('');
    }
  };
  
  const bookProgressPercent = pages.length > 0 ? ((currentPageIndex + 1) / pages.length) * 100 : 0;

  const tocContent = (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800">
      {/* Sticky Header for TOC (lg screens and up) */}
      <div className="lg:sticky lg:top-0 lg:z-10 bg-white dark:bg-slate-800 p-4 lg:p-6 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
        <h2 id="toc-title" className="text-xl lg:text-2xl font-semibold text-sky-700 dark:text-sky-400 truncate">
          {bookTitle}
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleSettingsPanel}
            className="hidden lg:flex flex-shrink-0 p-1.5 rounded-full text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-800 focus-visible:ring-sky-500"
            aria-label="Open display settings"
          >
            <SettingsIcon className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-200 active:bg-slate-300 dark:text-slate-400 dark:hover:bg-slate-700 dark:active:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 lg:hidden"
            aria-label="Close table of contents"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Controls Area */}
      <div className="p-3 lg:p-4 border-b border-slate-200 dark:border-slate-700 space-y-3">
        {/* Go to Page */}
        <form onSubmit={handleGoToPage} className="flex space-x-2">
          <input
            type="number"
            value={goToPageInput}
            onChange={(e) => setGoToPageInput(e.target.value)}
            placeholder={`Page (1-${pages.length})`}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            min="1"
            max={pages.length}
            aria-label="Go to page number input"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
            aria-label="Go to specified page"
          >
            Go
          </button>
        </form>
        {/* Search TOC */}
        <div className="relative">
          <input
            type="search" // Changed type to search for better semantics and potential browser UI
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search chapters/pages..."
            className="w-full px-3 py-2 pl-10 border border-slate-300 rounded-lg text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            aria-label="Search table of contents"
            aria-controls="toc-chapter-list"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
        </div>
         {/* Expand/Collapse All */}
        <div className="flex space-x-2">
          <button
            onClick={expandAllChapters}
            className="flex-1 px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 flex items-center justify-center space-x-1.5"
            aria-label="Expand all chapters"
          >
            <ExpandIcon className="w-3.5 h-3.5" />
            <span>Expand All</span>
          </button>
          <button
            onClick={collapseAllChapters}
            className="flex-1 px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 flex items-center justify-center space-x-1.5"
            aria-label="Collapse all chapters"
          >
            <CollapseIcon className="w-3.5 h-3.5" />
            <span>Collapse All</span>
          </button>
        </div>
      </div>
      
      {/* Book Progress in TOC */}
      <div className="px-4 pt-3 pb-1 text-xs text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-0.5">
          <span>Book Progress</span>
          <span>{bookProgressPercent.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5" role="progressbar" aria-label={`Book progress: ${bookProgressPercent.toFixed(0)}%`} aria-valuenow={bookProgressPercent} aria-valuemin={0} aria-valuemax={100}>
          <div className="bg-sky-600 dark:bg-sky-500 h-1.5 rounded-full" style={{ width: `${bookProgressPercent}%` }}></div>
        </div>
      </div>

      <nav ref={tocScrollContainerRef} id="toc-chapter-list" className="flex-grow overflow-y-auto p-3 lg:p-4" aria-labelledby="toc-title">
        {filteredChapters.length === 0 && searchTerm && (
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center py-4">No results found for "{searchTerm}".</p>
        )}
        <ul className="space-y-1">
          {filteredChapters.map((chapter) => {
            const firstPageOriginalIndex = chapter.pages[0].originalIndex;
            const lastPageOriginalIndex = chapter.pages[chapter.pages.length - 1].originalIndex;
            let chapterProgress = 0;
            let pagesReadInThisChapter = 0;

            if (currentPageIndex >= lastPageOriginalIndex) {
              chapterProgress = 100;
              pagesReadInThisChapter = chapter.pages.length;
            } else if (currentPageIndex >= firstPageOriginalIndex && currentPageIndex <= lastPageOriginalIndex) {
              pagesReadInThisChapter = currentPageIndex - firstPageOriginalIndex + 1;
              chapterProgress = (pagesReadInThisChapter / chapter.pages.length) * 100;
            }
            
            const isCurrentChapterActive = currentPageIndex >= firstPageOriginalIndex && currentPageIndex <= lastPageOriginalIndex;
            const isExpanded = expandedChapters.includes(chapter.chapterTitle) || (searchTerm && chapter.pages.length > 0) ; // Auto-expand if searching and chapter has matching pages

            return (
              <li key={chapter.chapterTitle}>
                <button
                  onClick={() => toggleChapter(chapter.chapterTitle)}
                  className={`w-full flex flex-col text-left px-3 py-2.5 rounded-lg text-md lg:text-lg font-medium text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600 focus:outline-none focus-visible:bg-slate-100 dark:focus-visible:bg-slate-700 ${isCurrentChapterActive ? 'bg-sky-50 dark:bg-sky-900/60' : ''}`}
                  aria-expanded={isExpanded}
                  aria-controls={`chapter-pages-${chapter.chapterTitle.replace(/\s+/g, '-')}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="truncate">{chapter.chapterTitle}</span>
                    {isExpanded ? <ChevronUpIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" /> : <ChevronDownIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" />}
                  </div>
                  <div className="mt-1.5 flex items-center">
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1 flex-grow" role="progressbar" aria-label={`Chapter ${chapter.chapterTitle} progress: ${chapterProgress.toFixed(0)}%`} aria-valuenow={chapterProgress} aria-valuemin={0} aria-valuemax={100}>
                      <div className={`h-1 rounded-full ${isCurrentChapterActive ? 'bg-sky-500' : 'bg-slate-400 dark:bg-slate-500'}`} style={{ width: `${chapterProgress}%` }}></div>
                    </div>
                    <span className="ml-2 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {pagesReadInThisChapter}/{chapter.pages.length}
                    </span>
                  </div>
                </button>
                {isExpanded && (
                  <ul id={`chapter-pages-${chapter.chapterTitle.replace(/\s+/g, '-')}`} className="pl-3 mt-1 space-y-0.5 border-l-2 border-slate-200 dark:border-slate-600 ml-2.5">
                    {chapter.pages.map((page) => (
                      <li key={page.id} ref={page.originalIndex === currentPageIndex ? activeTocItemRef : null}>
                        <button
                          onClick={() => handleNavigation(page.originalIndex)}
                          className={`w-full text-left block px-3 py-2 rounded-lg text-sm lg:text-base transition-colors ${
                            page.originalIndex === currentPageIndex
                              ? 'bg-sky-100 text-sky-700 dark:bg-sky-800 dark:text-sky-300 font-semibold'
                              : 'text-slate-600 hover:bg-slate-100 active:bg-slate-200 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600 dark:hover:text-sky-400'
                          }`}
                          aria-current={page.originalIndex === currentPageIndex ? "page" : undefined}
                        >
                          {page.pageTitle || `Page ${page.originalIndex + 1}`}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300 ease-in-out lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          dark:bg-slate-800 dark:border-slate-700
          w-72 sm:w-80
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:relative lg:flex-shrink-0 lg:shadow-none lg:border-r lg:border-slate-200 lg:w-72 xl:w-80 
        `} // lg:relative for sticky header to work within this container
        role="dialog"
        aria-modal={isOpen && window.innerWidth < 1024} // Only modal on smaller screens
        aria-labelledby="toc-title"
      >
        {tocContent}
      </aside>
    </>
  );
};

export default TableOfContents;