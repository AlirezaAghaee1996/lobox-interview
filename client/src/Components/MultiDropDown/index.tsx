import React, { useEffect, useRef, useState } from "react";
import "./multiDropDown.scss";
import { TiTick } from "react-icons/ti";

interface Option {
  label: string;
  value: string;
  select: boolean;
}

interface MultiDropDownProps {
  items: Option[];
  name: string;
  handleSelect: (selectedItems: Option[]) => void;
  placeholder?: string;
  handleChange: (val: Option) => void;
}

const MultiDropDown: React.FC<MultiDropDownProps> = ({
  items,
  name,
  handleSelect,
  placeholder,
  handleChange,
}) => {
  const [inp, setInp] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inp.trim() !== "") {
      handleChange({ label: inp, value: inp.toLowerCase(), select: false });
      setInp("");
    }
  };

  const handleItemClick = (clickedItem: Option) => {
    const updatedItems = items.map((item) =>
      item.value === clickedItem.value
        ? { ...item, select: !item.select }
        : item
    );
    handleSelect(updatedItems);
  };

  const dropDownOption = items.map((item) => (
    <div
      key={item.value}
      className={`option ${item.select ? "selected" : ""}`}
      onClick={() => handleItemClick(item)}
    >
      {item.label}
      {item.select && <TiTick className="success-icon" />}
    </div>
  ));

  return (
    <div ref={dropdownRef} className="multiDropDownContainer">
      <form className="multiDropDown" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeInput}
          name={name}
          id={name}
          placeholder={placeholder}
          value={inp}
          onFocus={() => setOpen(true)}
        />
      </form>
      <div className={`dropdown ${open ? "open" : ""}`}>{dropDownOption}</div>
    </div>
  );
};

export default MultiDropDown;
