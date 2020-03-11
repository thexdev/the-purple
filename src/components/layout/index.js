import React, { lazy, memo } from "react";

const Navigation = lazy(() => import("components/navigation"));

const MainLayout = props => {
  return (
    <main>
      <Navigation />
      {props.children}
    </main>
  );
};

export default memo(MainLayout);
