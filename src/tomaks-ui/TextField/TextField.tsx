import React from "react";
import "./textfield.css";

interface Props {
  value: string;
  label: string;
  onChange: () => void;
}

// input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextField = ({ onChange, value, label }: Props) => {
  return (
    <div className="cui-inputBox">
      <input onChange={onChange} value={value} />
      <label>{label}</label>
    </div>
  );
};

export default TextField;
