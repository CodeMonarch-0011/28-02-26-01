import "../../styles/home.css";
import image from "/images/johnny-depp.jpg";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>Welcome to the World of Johnny Depp</span>
        <span>
          Some actors chase fame. Some actors chase awards. <br />
          Johnny Depp chased transformation. And in doing so, he reshaped what
          mainstream stardom could look like. <br />
          He is not a product of Hollywood polish. He is the anomaly that
          slipped through the system — and then bent it around himself. <br />
          Unpredictable. Elusive. Intensely committed. <br />
          Johnny Depp didn’t build a career on likability. <br />
          He built it on risk.
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
