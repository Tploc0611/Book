
import React from 'react';
import { PageData } from '../types';
import PageContent from './PageContent';
import Navigation from './Navigation';
import { ChapterContextValue } from '../App'; // Import ChapterContextValue

interface BookWrapperProps {
  pageData: PageData;
  currentPageNumber: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  chapterContext: ChapterContextValue | null;
}

const BookWrapper: React.FC<BookWrapperProps> = ({
  pageData,
  currentPageNumber,
  totalPages,
  onNextPage,
  onPreviousPage,
  isFirstPage,
  isLastPage,
  chapterContext,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-xl dark:bg-slate-800 dark:shadow-lg dark:border dark:border-slate-700">
      <div className="p-6 md:p-10 lg:p-12 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-250px)] flex flex-col">
        <PageContent
          title={pageData.pageTitle}
          paragraphs={pageData.paragraphs}
          isCover={pageData.id === 'cover'}
          chapterContext={chapterContext} // Pass chapterContext to PageContent, though it might be unused there now
        />
        <Navigation
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          currentPage={currentPageNumber}
          totalPages={totalPages}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          chapterContext={chapterContext} // Pass chapterContext to Navigation
        />
      </div>
    </div>
  );
};

export default BookWrapper;