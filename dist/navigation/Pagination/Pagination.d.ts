/// <reference types="react" />
interface PaginationProps {
  maxPages: number;
  currentPage: number;
  onChange(value: number): void;
}
declare const Pagination: ({
  maxPages,
  currentPage,
  onChange,
}: PaginationProps) => JSX.Element;
export default Pagination;
