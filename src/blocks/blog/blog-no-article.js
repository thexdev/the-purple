import React, { memo } from "react";
import boring from "assets/images/blog/boring.png";

function BlogNoArticle() {
  return (
    <div>
      <img src={boring} alt="boring face" className="d-block mx-auto" />
      <div>
        <h5 className="text-center" style={{ color: "#2d2b55" }}>
          Um, ok. I haven't written any <br /> articles yet...
        </h5>
      </div>
    </div>
  );
}

export default memo(BlogNoArticle);
