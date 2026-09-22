export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a id="wd-your-link" href="https://www.nytimes.com/">
        New York Times
      </a>
      <br />
      <a
        id="wd-your-github"
        href="https://github.com/morrill-tw"
        target="_blank"
        rel="noreferrer"
      >
        morrill-tw
      </a>
      <br />
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        target="_blank"
        rel="noreferrer"
      >
        MDN: table element
      </a>
    </>
  );
}
