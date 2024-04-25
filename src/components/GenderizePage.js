import React, { useEffect, useRef, useState } from "react";
import CommonNamePage from "./CommonNamePage";

export default function GenderizePage() {
  return (
    <CommonNamePage
      id={0}
      title={"Determine Gender\nFrom a Name"}
      color={"#e78959"}
      api={"genderize"}
    />
  );
}
