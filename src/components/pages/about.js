import React from "react";
import profilePicture from "../../../extras/react-portfolio-assets-master/backgrounds/crondose.jpg";

export default function () {
  return (
    <div className="contant-page-wrapper">
      <div
        className="left-column"
        style={{
          backgrounds: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        tortor in dolor eleifend suscipit vel et enim. Sed dictum, arcu a
        aliquet bibendum, est mauris cursus diam, et bibendum purus mauris eget
        massa. Nulla facilisi. Phasellus sollicitudin lacus vel molestie
        aliquet. Nulla tempus, mauris quis convallis placerat, nisl purus
        porttitor nisl, id vestibulum lacus sapien vitae est. Phasellus
        vestibulum justo metus, eget egestas dui maximus non. Sed varius nunc eu
        dolor fermentum, id tincidunt augue tincidunt. Proin fringilla magna ac
        arcu ultrices, in laoreet sem pulvinar. Fusce turpis nibh, semper sed
        massa ut, sodales luctus nulla.
      </div>
    </div>
  );
}
