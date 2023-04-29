import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  component: Pagination,
} as Meta;

export const Default: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (page: number) => setCurrentPage(page);

  return (
    <Pagination
      maxPages={10}
      currentPage={currentPage}
      onChange={handleChange}
    />
  );
};
