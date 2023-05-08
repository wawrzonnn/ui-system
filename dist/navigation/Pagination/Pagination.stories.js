import React, { useState } from "react";
import Pagination from "./Pagination";
export default {
    component: Pagination
};
export var Default = function () {
    var _a = useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var handleChange = function (page) { return setCurrentPage(page); };
    return (React.createElement(Pagination, { maxPages: 10, currentPage: currentPage, onChange: handleChange }));
};
//# sourceMappingURL=Pagination.stories.js.map