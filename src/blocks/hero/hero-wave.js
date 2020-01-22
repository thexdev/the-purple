import React, { memo } from "react";

function HeroWave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5f5f6"
        fillOpacity="1"
        d="M0,160L40,133.3C80,107,160,53,240,74.7C320,96,400,192,480,197.3C560,203,640,117,720,106.7C800,96,880,160,960,202.7C1040,245,1120,267,1200,229.3C1280,192,1360,96,1400,48L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
}

export default memo(HeroWave);
