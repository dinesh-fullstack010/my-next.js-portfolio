export default function ProjectVisual({ kind, number }) {
  return (
    <div className={"project-visual visual-" + kind} aria-hidden="true">
      <div className="visual-top">
        <span>EXPLORATION {number}</span>
        <span>↗</span>
      </div>
      {kind === "drive" ? (
        <div className="map-scene">
          <svg viewBox="0 0 400 260">
            <path
              className="street"
              d="M-30 30L430 230M-30 190L390 -10M10 280L350 -20M-20 100L430 110"
            />
            <path
              className="map-route"
              d="M95 194L154 156L207 111L290 112L327 64"
            />
            <circle cx="95" cy="194" r="9" fill="#2449ec" />
            <circle
              cx="327"
              cy="64"
              r="10"
              fill="#2449ec"
              stroke="white"
              strokeWidth="6"
            />
          </svg>
          <div className="map-label">
            <b>On the move.</b>
            <span>Instructor location · Live route</span>
          </div>
          <div className="map-pill">↗ &nbsp; DriveMynt</div>
        </div>
      ) : kind === "bee" ? (
        <div className="events-scene">
          <div className="event-ticket">
            <span>THE COMMUNITY EDIT</span>
            <b>
              Good
              <br />
              company.
            </b>
            <div>MEET / CREATE / CONNECT</div>
            <i>✳</i>
          </div>
          <div className="ticket-stub">
            BEEFABRIC
            <br />
            <span>EVERYONE BELONGS.</span>
          </div>
        </div>
      ) : kind === "forms" ? (
        <div className="forms-scene">
          <div className="form-sheet">
            <span>YOUR IDEAS, STRUCTURED.</span>
            <b>A fresh start.</b>
            <div className="fake-input">
              Your name <i>↗</i>
            </div>
            <div className="fake-input">Your next big idea</div>
            <div className="fake-lines" />
            <div className="fake-send">Let’s make it happen →</div>
          </div>
          <div className="floating-plus">+</div>
        </div>
      ) : kind === "building" ? (
        <div className="building-scene">
          <div className="building-block one" />
          <div className="building-block two" />
          <div className="building-block three" />
          <div className="building-label">
            CONNECTED SPACES
            <br />
            <b>A clearer view.</b>
          </div>
        </div>
      ) : kind === "space" ? (
        <div className="space-scene">
          <div className="floor">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="space-label">
            A NEW PERSPECTIVE
            <br />
            <b>Imagine the space.</b>
          </div>
        </div>
      ) : (
        <div className="field-scene">
          <div className="field-lines" />
          <div className="field-focus">
            +<span>FIELD / CONNECTED</span>
          </div>
          <div className="field-label">
            From the field.
            <br />
            To your phone.
          </div>
        </div>
      )}
      <span className="visual-note">
        Illustrative concept, not a product screenshot
      </span>
    </div>
  );
}
