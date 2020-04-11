import React, { memo, useEffect } from "react";

import Footer from "components/footer";
import Navigation from "components/navigation";
import SocialMediaFloatBtn from "components/social-media-float-btn";
import SocialMediaFloatBtnMobile from "components/social-media-float-btn/mobile";

const MainLayout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
