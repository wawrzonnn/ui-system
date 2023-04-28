import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Pagination from "./Pagination";

export default {
  component: Pagination,
} as Meta;

export const Default: Story = () => {
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
