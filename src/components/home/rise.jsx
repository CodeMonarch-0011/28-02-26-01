import "../../styles/home.css";
import image from "/images/Johnny-Depp-8.webp";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">The Teen Idol He Refused to Become</span>
      <div className="rise-main">
        <div className="rise-txt">
          Television made him famous. 21 Jump Street turned Johnny Depp into a
          teen idol almost overnight. Posters. Magazine covers. Fandom hysteria.
          And he hated it. He felt trapped by the image. Manufactured.
          Contained. So he did something rare in Hollywood: He walked away from
          the version of success everyone else would have protected. Instead of
          leaning into heartthrob status, he pivoted toward art-house films,
          darker directors, unconventional scripts.
          <br /> He chose obscurity over repetition. That decision changed
          everything.
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
