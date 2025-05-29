
import React from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import { ChapterContextValue } from '../App'; // Import ChapterContextValue

interface NavigationProps {
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  chapterContext: ChapterContextValue | null; // Add chapterContext
}

const NavigationButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode; ariaLabel: string }> = ({ onClick, disabled, children, ariaLabel }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className="px-4 py-2 mx-1 text-slate-700 hover:text-sky-700 dark:text-slate-300 dark:hover:text-sky-400 disabled:text-slate-400 dark:disabled:text-slate-600 font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-800 transition-colors duration-150 ease-in-out flex items-center space-x-1.5 disabled:cursor-not-allowed hover:bg-sky-100 dark:hover:bg-slate-700 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
  >
    {children}
  </button>
);

const Navigation: React.FC<NavigationProps> = ({
  onNextPage,
  onPreviousPage,
  currentPage,
  totalPages,
  isFirstPage,
  isLastPage,
  chapterContext, // Destructure chapterContext
}) => {
  let chapterProgressPercentage = 0;
  if (chapterContext && chapterContext.totalChapterPages > 0) {
    chapterProgressPercentage = (chapterContext.currentPageWithinChapter / chapterContext.totalChapterPages) * 100;
  }

  return (
    <nav className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col items-center">
      {/* Chapter Progress Display */}
      {chapterContext && chapterContext.totalChapterPages > 0 && (
        <div className="w-full mb-4">
          <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1 px-1">
            <span className="truncate mr-2 font-medium">{chapterContext.chapterTitle}</span>
            <span className="flex-shrink-0 whitespace-nowrap">{chapterContext.currentPageWithinChapter} of {chapterContext.totalChapterPages} in chapter</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5" role="progressbar" aria-label={`Chapter progress: ${chapterProgressPercentage.toFixed(0)}%`} aria-valuenow={chapterProgressPercentage} aria-valuemin={0} aria-valuemax={100}>
            <div 
              className="bg-sky-600 dark:bg-sky-500 h-1.5 rounded-full transition-all duration-300 ease-out" 
              style={{ width: `${chapterProgressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}
      {/* Page Navigation Controls */}
      <div className="w-full flex flex-row items-center justify-between">
        <NavigationButton onClick={onPreviousPage} disabled={isFirstPage} ariaLabel="Previous Page">
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Previous</span>
        </NavigationButton>
        <span className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <NavigationButton onClick={onNextPage} disabled={isLastPage} ariaLabel="Next Page">
          <span className="hidden sm:inline">Next</span>
          <ChevronRightIcon className="w-5 h-5" />
        </NavigationButton>
      </div>
    </nav>
  );
};

export default Navigation;