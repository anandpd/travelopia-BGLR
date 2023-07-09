// CSS
import "./infotext.style.css";
// React hooks
import React, { ReactElement } from "react";

export const InfoText: React.FC = (): ReactElement => {
  return (
    <p className="infotxt-main">
      Experience a completely customized and flexible trip of a lifetime with experts you can trust. We are an <span className="info-txt-bold">award-winning team</span> that offers{" "}
      <span className="info-txt-bold">round-the-clock local support </span> during your trip and
      <span className="info-txt-bold"> 100% financial protection </span> so you know you are in safe hands. That’s why over <span className="info-txt-bold">40,000+ enchanted guests </span>vouch for us
      – because with us, you can <span className="info-txt-bold">dream, book and travel carefree. </span>
    </p>
  );
};
