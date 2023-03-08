import { useState } from 'react';

export const usePagination = totalPages => {
  const [currentPage, setCurrentPage] = useState(1);

  const next = () =>
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));

  const prev = () =>
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));

  const jump = page =>
    setCurrentPage(currentPage => Math.min(Math.max(1, page), totalPages));

  return { next, prev, jump, currentPage };
};
