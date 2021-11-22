import countries from "../assets/data";
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
export default function MyComponent() {
  let [country, setCountry] = useState(countries[106].label);

  useEffect(() => {
    document.getElementById("chosen-country").isSearchable = "true";
  });
  const selectEl = useRef(null);
  return (
    <>
      <Select
        getOptionLabel={(country) => country.label}
        ref={selectEl}
        onChange={(obj) => setCountry(obj)}
        isSearchable="false"
        isClearable
        options={countries}
        id="chosen-country"
      />
      <br />
      {!country ? (
        <div></div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>{country.label}</h1>
        </div>
      )}
    </>
  );
}
