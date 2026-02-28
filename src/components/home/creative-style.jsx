import "../../styles/home.css";
// import { DATA } from "../../static-contents/creative-style";

// eslint-disable-next-line react/prop-types
// function CreativeStyleCard({ title, content, id }) {
//   return (
//     <div className="creative-style-card">
//       <span>{id}</span>
//       <div className="creative-style-card-content">
//         <span>{title}</span>
//         <span>{content}</span>
//       </div>
//     </div>
//   );
// }

export function CreativeStyle() {
  return (
    <section className="creative-style">
      <span className="creative-style-hdr">
        Captain Jack Sparrow: Chaos as Genius
      </span>

      <div className="creative-style-main">
        Then came the gamble.
        <em>Pirates of the Caribbean:</em> The Curse of the Black Pearl
        introduced Captain Jack Sparrow — a character played not as a
        traditional swashbuckling hero, but as a slurring, eccentric, morally
        slippery trickster.
        <br /> Studio executives reportedly panicked. Audiences didn’t. <br />
        The performance earned an Academy Award nomination and redefined
        blockbuster acting. Jack Sparrow was unpredictable but intelligent.
        Comic but dangerous. Absurd but layered. Depp turned a franchise
        character into cultural mythology. He made weirdness commercial.
      </div>
    </section>
  );
}
