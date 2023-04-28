import { useState } from "react";
import styles from "./Pagination.module.css";
import React from "react";
import { ArrowPaginationRight } from "../../assets/Icons/ArrowPaginationRight";
import { ArrowPaginationLeft } from "../../assets/Icons/ArrowPaginationLeft";

interface PaginationProps {
  maxPages: number;
  currentPage: number;
  onChange(value: number): void;
}

const Pagination = ({ maxPages, currentPage, onChange }: PaginationProps) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handleClick = (value: number) => {
    setActivePage(value);
    onChange(value);
  };

  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= maxPages; i++) {
      if (
        i === 1 ||
        i === maxPages ||
        (i >= activePage - 1 && i <= activePage + 1)
      ) {
        pages.push(
          <div
            className={`${styles.paginationItem} ${
              activePage === i && styles.activePage
            }`}
            onClick={() => handleClick(i)}
          >
            {i}
          </div>
        );
      } else if (i === activePage - 2 || i === activePage + 2) {
        pages.push(<div>...</div>);
      }
    }
    return pages;
  };

  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      onChange(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < maxPages) {
      setActivePage(activePage + 1);
      onChange(activePage + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.buttonPrev} ${
          activePage === 1 && styles.buttonDisabled
        }`}
        onClick={handlePrev}
      >
        <ArrowPaginationLeft />
      </div>
      {renderPages()}
      <div
        className={`${styles.buttonNext} ${
          activePage === maxPages && styles.buttonDisabled
        }`}
        onClick={handleNext}
      >
        <ArrowPaginationRight />
      </div>
    </div>
  );
};

export default Pagination;
