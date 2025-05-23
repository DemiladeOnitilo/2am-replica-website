import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#E17A1B", "#E17A1B", "#E17A1B", "#E17A1B", "#E17A1B"]}
      />
    </div>
  );
};

export default Loader;
