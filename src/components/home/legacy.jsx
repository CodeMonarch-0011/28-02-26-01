import "../../styles/home.css";
import image from "/images/johnny-depp-collage.jpg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">Cultural Impact</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          Johnny Depp proved that eccentricity could dominate the global box
          office. He expanded what leading men could look like:
          <br />
          Not always heroic. <br />
          Not always clean. <br />
          Not always stable. <br />
          He blurred the line between character actor and megastar. He is not a
          conventional legend. He is a complicated one. And that complexity is
          part of his legacy.
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
