import React, { memo } from "react";

import Footer from "components/footer";
import Navigation from "components/navigation";
import SocialMediaFloatBtn from "components/social-media-float-btn";
import SocialMediaFloatBtnMobile from "components/social-media-float-btn/mobile";

const MainLayout = (props) => {
  return (
    <>
      <main>
        <Navigation />
        <SocialMediaFloatBtn />
        <SocialMediaFloatBtnMobile />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
