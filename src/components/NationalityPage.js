import React, { useEffect, useRef, useState } from "react";
import CommonNamePage from "./CommonNamePage";

export default function NationalityPage() {
  return (
    <CommonNamePage
      id={1}
      title={"Predict the Nationality\nof a Name"}
      color={"#46bf6a"}
      api={"nationalize"}
    />
  );
}
