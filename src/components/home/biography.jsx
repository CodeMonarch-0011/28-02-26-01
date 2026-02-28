import "../../styles/home.css";
import image from "/images/johnny-depp-7.webp";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">
        The Early Years: Restlessness Before Recognition
      </span>

      <div className="biography-txt">
        <div>
          Born in Owensboro, Kentucky, Depp’s childhood was marked by movement
          and instability. His family relocated often. Structure was
          inconsistent. Expression became survival.
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>

        <div>
          Music came first. A guitar at twelve. Garage bands. Dreams of being a
          rock musician. <br />
          Acting wasn’t a childhood fantasy. It was an unexpected door. <br />
          He didn’t enter Hollywood as a strategist. He entered as an artist
          looking for texture. <br />
          Before celebrity, there was a young man drawn to the margins — to
          outsiders, eccentrics, the beautifully strange. <br />
          That instinct would define everything.
        </div>
      </div>
    </section>
  );
}
