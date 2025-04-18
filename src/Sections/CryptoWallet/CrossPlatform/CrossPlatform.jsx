import CrossPlatformStyle from "./CrossPlatform.style";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import crossPlatformMeshGrad from "../../../assets/images/crypto/cross-platform-mesh-grad.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";

const CrossPlatform = () => {
  return (
    <CrossPlatformStyle className="cross-platform-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="cross-platform-card">
            <SectionTitle
              title="Join the TIW Network Today"
              alignment="center"
              titleMaxW="662px"
              titleMargin="auto"
              parentClass="crypto md-mb-0"
            />
            <p className="paragraph">Unlock exclusive benefits and connect with Scotland's leading property investors and developers.</p>

            <NavLink to={"/"} className="crypto-glow-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Join Network</span>
                <span className="btn-hover-text">Join Network </span>
              </span>
            </NavLink>

          </div>
        </ScrollAnimate>
      </div>
    </CrossPlatformStyle>
  );
};

export default CrossPlatform;
