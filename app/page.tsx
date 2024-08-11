import Details from "../components/Details";
import FormLayout from "../components/FormLayout";
import SvgGraphics from "../components/SvgGraphic";
import React from "react";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <FormLayout />
          <Details/>
        </div>
      </div>
      <SvgGraphics/>
    </div>
  );
}
