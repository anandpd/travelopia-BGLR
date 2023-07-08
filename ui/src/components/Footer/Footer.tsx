import React, { ReactElement } from "react";
import "./footer.style.css";

export const Footer: React.FC = (): ReactElement => {
  return (
    <p className="footer-main">
      Experience a completely customized and flexible trip of a lifetime with experts you can trust. We are an <span className="footer-txt-bold">award-winning team</span> that offers{" "}
      <span className="footer-txt-bold">round-the-clock local support </span> during your trip and
      <span className="footer-txt-bold">100% financial protection </span> so you know you are in safe hands. That’s why over <span className="footer-txt-bold">40,000+ enchanted guests </span>vouch for
      us – because with us, you can <span className="footer-txt-bold">dream, book and travel carefree. </span>
    </p>
  );
};
