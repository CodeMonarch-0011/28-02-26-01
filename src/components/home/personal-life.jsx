import "../../styles/home.css";
// import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">Public Collapse & Public Trial</span>
      <div className="personal-life-txt">
        <span>
          Few modern actors have experienced such intense public scrutiny. Legal
          battles. Allegations. Courtroom broadcasts consumed globally. Media
          narratives shifting in real time. <br />
          For a period, Depp went from box-office titan to industry exile.
          <br />
          Studios distanced themselves. Roles disappeared. Reputation fractured.
        </span>

        {/* <div className="personal-life-text-mid">

        </div> */}

        <span>
          And yet — audiences remained divided, passionate, invested. His career
          became a cultural referendum on fame, accountability, media power, and
          public perception. <br />
          Regardless of perspective, one fact remains: <br />
          He survived it. Few stars endure global scandal and return to work.{" "}
          <br />
          Depp did.
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
