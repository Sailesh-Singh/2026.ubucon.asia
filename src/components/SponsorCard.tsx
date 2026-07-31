import { useState } from "react";
import "./SponsorCard.css";

type SponsorCardProps = {
  name: string;
  level: string;
  tierColor: string;
  partnerTag?: string;
  logoImageSrc: string;
  description: string;
  url: string;
  showPopup: boolean;
};

export default function SponsorCard(props: SponsorCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeHandler = () => setModalOpen(false);

  const contentId = props.name.toLowerCase().replace(/[^a-z0-9]+/gi, "-");
  const modalId = `${contentId}-modal`;

  return (
    <>
      <button
        type="button"
        className="sponsor-card"
        style={{ "--tier-color": props.tierColor } as React.CSSProperties}
        onClick={() => {
          if (props.showPopup) {
            setModalOpen(true);
          }
        }}
        aria-label={`View details about ${props.name}`}
        aria-haspopup={props.showPopup ? "dialog" : undefined}
      >
        <span className="sponsor-card__ribbon">{props.level}</span>
        <img
          className="sponsor-card__logo"
          src={props.logoImageSrc}
          alt={props.name}
        />
      </button>

      <div
        className="p-modal"
        id={modalId}
        style={{ display: modalOpen && props.showPopup ? "flex" : "none" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeHandler();
          }
        }}
      >
        <section
          className="p-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${contentId}-title`}
          aria-describedby={`${contentId}-description`}
        >
          <header className="p-modal__header">
            <h2 className="p-modal__title" id={`${contentId}-title`}>
              About the sponsor
            </h2>
            <button
              className="p-modal__close"
              aria-label="Close active modal"
              aria-controls={modalId}
              onClick={closeHandler}
            >
              Close
            </button>
          </header>
          <img src={props.logoImageSrc} alt={props.name} />
          <h1>{props.name}</h1>
          <b>{props.level} </b>
          <b>{props.partnerTag}</b>
          <p
            id={`${contentId}-description`}
            style={{ textAlign: "left", marginBottom: "1.5rem" }}
          >
            {props.description}
          </p>
          <footer className="p-modal__footer">
            <a href={props.url}>
              <button className="p-button--positive u-no-margin--bottom">
                Visit website
              </button>
            </a>
          </footer>
        </section>
      </div>
    </>
  );
}
