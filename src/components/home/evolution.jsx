import "../../styles/home.css";

export function Evolution() {
  return (
    <section className="rise-to-prominence">
      <span className="rise-to-prominence-hdr">
        The Burton Era: Gothic Mainstream
      </span>

      <div className="rise-to-prominence-txt">
        His collaboration with Tim Burton became one of cinema’s most
        distinctive actor-director partnerships.
      </div>

      <div className="rise-to-prominence-list">
        <span className="rise-to-prominence-list-hdr">
          Together they built a gallery of misfits:
        </span>
        <ul>
          <li>
            <span>Edward Scissorhands</span>
            <span>silent, fragile, alien yet gentle</span>
          </li>

          <li>
            <span>Ed Wood</span>
            <span>passionate, misunderstood, obsessive</span>
          </li>

          <li>
            <span>Sleepy Hollow</span>
            <span>analytical yet uneasy</span>
          </li>
        </ul>
      </div>

      <div className="rise-to-prominence-extra">
        Depp specialized in characters who didn’t fit the room. He played men
        who were too soft, too strange, too damaged, too imaginative for the
        world around them. <br />
        And audiences connected. He wasn’t performing weirdness. He was
        humanizing it.
      </div>
    </section>
  );
}
