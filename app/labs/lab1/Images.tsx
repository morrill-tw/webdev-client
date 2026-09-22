export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        width="400px"
        alt="Webb telescope deep field"
        src="https://science.nasa.gov/wp-content/uploads/2023/09/web-first-images-release.png"
      />
      <br />
      <img
        id="wd-your-image"
        width="400px"
        alt="Beacon Hill"
        src="https://www.bu.edu/files/2022/09/beacon-hill-feat-1600x900.jpg"
      />
    </div>
  );
}
