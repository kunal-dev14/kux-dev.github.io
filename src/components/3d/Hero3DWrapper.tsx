"use client";

import dynamic from "next/dynamic";
import { HeroPlaceholder } from "./HeroPlaceholder";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <HeroPlaceholder />,
});

export function Hero3DWrapper() {
  return <HeroCanvas />;
}

