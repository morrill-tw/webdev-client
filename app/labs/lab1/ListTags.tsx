export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Grab two pieces of bread, peanut butter, and jelly.</li>
        <li>
          Spread peanut butter onto one piece of bread and jelly onto the other.
        </li>
        <li>Place both pieces together, and there you have a PB&J!</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books:
      <ul id="wd-your-books">
        <li>Project Hail Mary</li>
        <li>How to Change Your Mind</li>
        <li>Algorithms to Live By</li>
      </ul>
      HTML tags from this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1 &mdash; the most prominent heading on a page.</li>
        <li>p &mdash; a paragraph of text.</li>
        <li>ol &mdash; an ordered list where sequence matters.</li>
        <li>ul &mdash; an unordered list of items in any order.</li>
        <li>li &mdash; a single item inside an ordered or unordered list.</li>
        <li>table &mdash; rows and columns of tabular data.</li>
        <li>img &mdash; embeds an image in the page.</li>
      </ul>
    </div>
  );
}
