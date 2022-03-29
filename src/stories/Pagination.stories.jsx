import React, { useState } from "react";

import Pagination from "../components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Pagination } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(7);
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        {...args}
      />
    </div>
  );
};

export const PaginationComponent = Template.bind({});
PaginationComponent.args = {
  totalRecordsCount: 100,
  showResultsPerPage: true,
};

export const PaginationComponentWithoutResultsPerPage = Template.bind({});
PaginationComponentWithoutResultsPerPage.args = {
  totalRecordsCount: 100,
};
