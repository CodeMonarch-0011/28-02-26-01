import "../../styles/home.css";
import image from "/images/pngtree-johnny-depp-s-new-single-the-rain-image_2574854.jpg";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">Creative DNA</span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>Johnny Depp’s artistic identity rests on five pillars:</span>

          <div>
            <ul>
              <li>
                <span>Transformation as Discipline</span>
                <span>
                  He approaches characters physically first — voice, movement,
                  silhouette.
                </span>
              </li>

              <li>
                <span>Sympathy for the Outsider</span>
                <span>Nearly every defining role centers isolation.</span>
              </li>

              <li>
                <span>Risk Appetite</span>
                <span>
                  He consistently chooses unpredictability over safety.
                </span>
              </li>

              <li>
                <span>Theatrical Instinct</span>
                <span>He is not afraid of stylization.</span>
              </li>

              <li>
                <span>Resistance to Conformity</span>
                <span>
                  He has never shaped himself to fit the studio mold. <br />
                  He doesn’t maintain stardom by polishing image. <br />
                  He maintains it by committing to craft.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
