import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Margins from "./Margins";
import MediaQueriesDemo from "./MediaQueriesDemo";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIconsSampler";
import ZIndex from "./ZIndex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph uses the style attribute to set a purple background with
        white text.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Hi! Hello! Hey there!
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This paragraph is styled using its own ID selector, separate from the
          others.
        </p>
        <p id="wd-id-selector-3">
          Here&apos;s my own paragraph with id selector
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This paragraph uses a sample class selector with its own distinct
          colors.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading uses the same sample class selector
        </h4>
        <h4 className="wd-your-class">My class</h4>
        <p className="wd-your-class">Heres some text</p>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct
                <span className="wd-selector-5"> child</span> of its parent
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This span is styled using a sample descendant selector from
                wd-selector-1
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-cascading">
        <h3>Cascading and specificity</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          This paragraph is matched by a tag rule, a class rule, and an id rule
          all at once.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <ZIndex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
    </div>
  );
}
