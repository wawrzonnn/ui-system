import React, { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";
import { Checked } from "../../assets/Icons/Checked";
var cx = classNames.bind(styles);
export var Checkbox = function (_a) {
    var _b, _c;
    var label = _a.label, id = _a.id, value = _a.value, name = _a.name, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.checked, checked = _e === void 0 ? false : _e, error = _a.error, onChange = _a.onChange;
    var _f = useState(checked), isChecked = _f[0], setChecked = _f[1];
    useEffect(function () {
        setChecked(checked);
    }, [checked]);
    var dynamicClasses = cx((_b = {},
        _b[styles.baseCheckbox] = true,
        _b[styles.disabled] = disabled,
        _b[styles.checked] = isChecked,
        _b[styles.errorCheckbox] = !!error,
        _b));
    var wrapperDynamicClass = cx((_c = {},
        _c[styles.checkboxWrapper] = true,
        _c[styles.disabled] = disabled,
        _c));
    return (React.createElement("div", null,
        React.createElement("label", { className: wrapperDynamicClass, htmlFor: id },
            React.createElement("div", { className: dynamicClasses }, isChecked && React.createElement(Checked, null)),
            React.createElement("input", { type: "checkbox", value: value, hidden: true, name: name, disabled: disabled, checked: isChecked, id: id, onChange: function (e) {
                    setChecked(!isChecked);
                    onChange(e);
                } }),
            label && label),
        error && React.createElement("span", { className: styles.error }, error)));
};
//# sourceMappingURL=Checkbox.js.map