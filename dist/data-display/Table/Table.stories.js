import React, { Fragment } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "./Table";
export default {
    component: Table
};
var rows = [
    {
        breed: "Cocker Spaniel",
        name: "Richard",
        weight: 15,
        height: 31,
        chip: true,
        ower: false
    },
    {
        breed: "Labrador Retriever",
        name: "Fifi",
        weight: 25,
        height: 42,
        chip: true,
        ower: true
    },
    {
        breed: "German Shepherd",
        name: "Chaps",
        weight: 26,
        height: 57,
        chip: false,
        ower: false
    },
    {
        breed: "Dog",
        name: "Reksio",
        weight: 36,
        height: 56,
        chip: false,
        ower: true
    },
    {
        breed: "Golden Retriever",
        name: "Mufasa",
        weight: 49,
        height: 24,
        chip: true,
        ower: false
    },
];
export var Template = function () { return (React.createElement(Fragment, null,
    React.createElement(Table, null,
        React.createElement(TableHead, null,
            React.createElement(TableRow, null,
                React.createElement(TableCell, { align: "left" }, "Dog\u2019s breed"),
                React.createElement(TableCell, { align: "right" }, "Name"),
                React.createElement(TableCell, { align: "right" }, "Weight (kg)"),
                React.createElement(TableCell, { align: "right" }, "Height (cm)"),
                React.createElement(TableCell, { align: "right" }, "Chip"),
                React.createElement(TableCell, { align: "right" }, "Ower"))),
        React.createElement(TableBody, null, rows.map(function (row) { return (React.createElement(TableRow, { key: row.breed },
            React.createElement(TableCell, { align: "left" }, row.breed),
            React.createElement(TableCell, { align: "right" }, row.name),
            React.createElement(TableCell, { align: "right" }, row.weight),
            React.createElement(TableCell, { align: "right" }, row.height),
            React.createElement(TableCell, { align: "right" }, row.chip ? "Yes" : "No"),
            React.createElement(TableCell, { align: "right" }, row.ower ? "Yes" : "No"))); }))))); };
//# sourceMappingURL=Table.stories.js.map