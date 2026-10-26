export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let myString = "Hi";
  let myNum = 999;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  let isMyString = typeof myString;
  let isMyNum = typeof myNum;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      sampleCount = {sampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      isSampleLabel = {isSampleLabel}
      <br />
      myNum = {myNum}
      <br />
      myString = {myString}
      <br />
      isMyNum = {isMyNum}
      <br />
      isMyString = {isMyString}
      <hr />
    </div>
  );
}
