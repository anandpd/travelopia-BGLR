// CSS
import "./footer.style.css";

// React hooks
import React, { ReactElement } from "react";

export const Footer: React.FC = (): ReactElement => {
  return <div className="footer-main">
      <div>    Enchanting Travels, Inc © 2023 <a href = "mailto: contact@enchantingtravels.com">contact@enchantingtravels.com</a></div>
      <div>8400 E Prentice Ave, Suite 1500, Greenwood Village, CO 80111, USA</div>
  </div>;
};
