export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  let myName = "Tyler";
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  const greeting = "Hello " + myName + "!";
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      sampleSum = {sampleSum}
      <br />
      My name is {myName}.
      <br />
      {greeting}
      <hr />
    </div>
  );
}
