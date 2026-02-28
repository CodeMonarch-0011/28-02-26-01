import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">
        Johnny Depp’s story isn’t about perfection.
      </span>

      <div>
        It’s about persistence through transformation. <br />
        Some actors play roles. <br />
        He becomes myth.
      </div>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
