import { useState } from "react";
import styles from "./Pagination.module.css";
import React from "react";
import { ArrowPaginationRight } from "../../assets/Icons/ArrowPaginationRight";
import { ArrowPaginationLeft } from "../../assets/Icons/ArrowPaginationLeft";
var Pagination = function (_a) {
    var maxPages = _a.maxPages, currentPage = _a.currentPage, onChange = _a.onChange;
    var _b = useState(currentPage), activePage = _b[0], setActivePage = _b[1];
    var handleClick = function (value) {
        setActivePage(value);
        onChange(value);
    };
    var renderPages = function () {
        var pages = [];
        var _loop_1 = function (i) {
            if (i === 1 ||
                i === maxPages ||
                (i >= activePage - 1 && i <= activePage + 1)) {
                pages.push(React.createElement("div", { className: "".concat(styles.paginationItem, " ").concat(activePage === i && styles.activePage), onClick: function () { return handleClick(i); } }, i));
            }
            else if (i === activePage - 2 || i === activePage + 2) {
                pages.push(React.createElement("div", null, "..."));
            }
        };
        for (var i = 1; i <= maxPages; i++) {
            _loop_1(i);
        }
        return pages;
    };
    var handlePrev = function () {
        if (activePage > 1) {
            setActivePage(activePage - 1);
            onChange(activePage - 1);
        }
    };
    var handleNext = function () {
        if (activePage < maxPages) {
            setActivePage(activePage + 1);
            onChange(activePage + 1);
        }
    };
    return (React.createElement("div", { className: styles.wrapper },
        React.createElement("div", { className: "".concat(styles.buttonPrev, " ").concat(activePage === 1 && styles.buttonDisabled), onClick: handlePrev },
            React.createElement(ArrowPaginationLeft, null)),
        renderPages(),
        React.createElement("div", { className: "".concat(styles.buttonNext, " ").concat(activePage === maxPages && styles.buttonDisabled), onClick: handleNext },
            React.createElement(ArrowPaginationRight, null))));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map