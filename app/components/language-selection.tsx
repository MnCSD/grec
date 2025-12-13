"use client";

import React, { useEffect } from "react";
import Select, { components, StylesConfig } from "react-select";
import "flag-icons/css/flag-icons.min.css";
import { useLanguage } from "../contexts/language-context";

interface Option {
  value: "en" | "gr";
  label: string;
  countryCode: string;
}

const options: Option[] = [
  {
    value: "en",
    label: "English",
    countryCode: "GB",
  },
  {
    value: "gr",
    label: "Greek",
    countryCode: "GR",
  },
];

const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "40px",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderColor: "#6C7A3A",
    backgroundColor: "white",
    boxShadow: state.menuIsOpen ? "0 0 0 3px rgba(108, 122, 58, 0.1)" : "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#6C7A3A",
      boxShadow: "0 0 0 3px rgba(108, 122, 58, 0.05)",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    padding: "8px 12px",
    backgroundColor: state.isFocused ? "#e8ebe0" : "white",
    color: "#6C7A3A",
    borderRadius: "8px",
    margin: "2px 0",
    transition: "all 0.15s ease",
    "&:active": {
      backgroundColor: "#e8ebe0",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "4px 2px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid #6C7A3A",
    marginTop: "8px",
    backgroundColor: "white",
    boxShadow:
      "0 8px 24px rgba(108, 122, 58, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08)",
    animation: "slideDown 0.2s ease",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "6px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "4px 4px",
    color: "#6C7A3A",
    transition: "transform 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    "&:hover": {
      color: "#6C7A3A",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-center py-1">
        <span
          className={`fi fi-${props.data.countryCode.toLowerCase()} text-2xl rounded-full overflow-hidden`}
        ></span>
      </div>
    </components.Option>
  );
};

const CustomSingleValue = (props: any) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center justify-center">
        <span
          className={`fi fi-${props.data.countryCode.toLowerCase()} text-2xl rounded-full overflow-hidden`}
        ></span>
      </div>
    </components.SingleValue>
  );
};

export const LanguageSelection = () => {
  const { language, setLanguage } = useLanguage();

  const selectedOption = options.find((opt) => opt.value === language) || options[0];

  const handleChange = (option: Option | null) => {
    if (option) {
      setLanguage(option.value);
    }
  };

  return (
    <div className="w-20">
      <Select<Option, false>
        instanceId="language-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue,
        }}
        isSearchable={false}
      />
    </div>
  );
};
