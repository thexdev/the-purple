import React, { lazy, memo } from "react";

const Navigation = lazy(() => import("components/navigation"));
const SocialMediaFloatBtn = lazy(() =>
  import("components/social-media-float-btn")
);
const SocialMediaFloatBtnMobile = lazy(() =>
  import("components/social-media-float-btn/mobile")
);

const MainLayout = (props) => {
  return (
    <main>
      <Navigation />
      <SocialMediaFloatBtn />
      <SocialMediaFloatBtnMobile />
      {props.children}
    </main>
  );
};

export default memo(MainLayout);
