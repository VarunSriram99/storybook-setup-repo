import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Select from "./Select";
import { LeftMinimalArrow, RightMinimalArrow } from "../icons";

import Button from "./Button";
import Typography from "./Typography";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalRecordsCount,
  pageSize = 5,
  showResultsPerPage = false,
  setPageSize,
  className,
}) => {
  currentPage = parseInt(currentPage);
  totalRecordsCount = parseInt(totalRecordsCount);
  pageSize = parseInt(pageSize);

  const totalPages = Math.ceil(totalRecordsCount / pageSize);

  const options = Array.from({ length: totalPages }, (_, index) => {
    return { value: index + 1, label: index + 1 };
  });

  const pageSizeOptions = Array.from({ length: 7 }, (_, index) => {
    return { value: 5 + index, label: 5 + index };
  });

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className={classnames("cs-ui-pagination", className)}>
      {showResultsPerPage && (
        <div className="cs-ui-pagination__selector">
          <span>Results per page</span>
          <Select
            defaultValue={{ value: pageSize, label: pageSize }}
            options={pageSizeOptions}
            onChange={option => setPageSize(option.value)}
            maxMenuHeight={200}
            menuPlacement="auto"
            className="select"
          />
        </div>
      )}
      <div className="cs-ui-pagination__right">
        <Typography className="cs-ui-pagination__text">
          <span>Showing</span>
          <Typography className="cs-ui-pagination__text--highlight">
            {(currentPage - 1) * pageSize + 1 < totalRecordsCount
              ? (currentPage - 1) * pageSize + 1
              : totalRecordsCount}
          </Typography>
          <span>to</span>
          <span className="cs-ui-pagination__text--highlight">
            {currentPage * pageSize < totalRecordsCount
              ? currentPage * pageSize
              : totalRecordsCount}
          </span>
          <span>of</span>
          <Typography className="cs-ui-pagination__text--highlight">
            {totalRecordsCount}
          </Typography>
          <span>results</span>
        </Typography>
        <div className="cs-ui-pagination__selector">
          <Button
            style="icon"
            label={
              <Typography className="cs-ui-pagination__selector--highlight">
                PREV
              </Typography>
            }
            icon={LeftMinimalArrow}
            disabled={currentPage === 1 || totalPages === 0}
            iconPosition="left"
            onClick={() => prevPage()}
          />
          <Select
            defaultValue={
              totalPages < 1 ? { value: 0, label: 0 } : { value: 1, label: 1 }
            }
            value={
              totalPages < 1
                ? { value: 0, label: 0 }
                : { value: currentPage, label: currentPage }
            }
            options={options}
            onChange={option => setCurrentPage(option.value)}
            maxMenuHeight={200}
            menuPlacement="auto"
            className="select"
          />
          <Typography>of</Typography>
          <Typography className="cs-ui-pagination__selector--highlight">
            {totalPages}
          </Typography>
          <Button
            style="icon"
            label={
              <Typography className="cs-ui-pagination__selector--highlight">
                NEXT
              </Typography>
            }
            icon={RightMinimalArrow}
            disabled={currentPage === totalPages || totalPages === 0}
            iconPosition="right"
            onClick={() => nextPage()}
          />
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalRecordsCount: PropTypes.number,
  pageSize: PropTypes.number,
  showResultsPerPage: PropTypes.bool,
  setPageSize: PropTypes.func,
  className: PropTypes.string,
};

export default Pagination;
