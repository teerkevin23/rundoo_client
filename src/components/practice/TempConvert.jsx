import React, {useState} from 'react';

const TempConvert = () => {
  const [f, setF] = useState('');
  const [c, setC] = useState('');
  /*
    function convert(value, setDestination, calculateValue) {
    const numericValue = Number(value);
    const isValid =
      !Number.isNaN(numericValue) && Boolean(value);
    setDestination(
      isValid ? format(calculateValue(numericValue)) : '',
    );

    convert(
                newValue,
                setFahrenheit,
                (value) => (value * 9) / 5 + 32,
              );
  }
   */
  const convert = (newValue, setter, calculate)  => {
    setter(calculate(newValue));
  }

  const convertCtoF = (value) => {
    return (value * 9) / 5 + 32
  }
  const convertFtoC = (value) => {
    return ((value - 32) * 5) / 9;
  }

  return (
    <div className="temperature-converter">
      <div className={"c"}>
        C
        <input
          className="temperature-converter-column-top-row"
          type="number"
          value={c}
          onChange={(event) => {
            const newValue = event.target.value;
            setC(newValue);
            convert(
              newValue,
              setF,
              convertCtoF
            );
          }}
        />
      </div>
      <div className={"f"}>
        F
        <input
          className="temperature-converter-column-top-row"
          type="number"
          value={f}
          onChange={(event) => {
            const newValue = event.target.value;
            setF(newValue);
            convert(
              newValue,
              setC,
              (value) => ((value - 32) * 5) / 9,
            );
          }}
        />
      </div>
    </div>
  );
}
export default TempConvert;