import React from "react";

const Radio = ({ pergunta, options, id, value, onChange, active }) => {


    if (!active) return null;

  return (
    <fieldset
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
        padding: "2rem",
        border: "1px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          style={{
            display: "inline-block",
            width: "fit-content",
            marginBottom: `1rem`,
            fontFamily: "monoespaced",
          }}
          key={option}
        >
          <input
            style={{ display: "inline-block", width: "fit-content" }}
            type="radio"
            name={id}
            id={id}
            value={option}
            onChange={onChange}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
