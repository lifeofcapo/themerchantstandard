import type { Metadata } from "next";
import FreeTrainingClient from "./free-training-client";

export const metadata: Metadata = {
  title: "Free Training: Sell Music Products Without Making a Single Beat",
  description:
    "Watch this free 12-minute training and see exactly how to start a real online business selling music products — with the product, an AI that closes deals for you, and the exact system.",
  alternates: { canonical: "https://themerchantstandard.com/free-training" },
  openGraph: {
    title: "Free Training — The Merchant Standard",
    description:
      "See the exact mechanism: the product, Merchant AI, and the system behind The Merchant Standard.",
    url: "https://themerchantstandard.com/free-training",
  },
};

export default function FreeTrainingPage() {
  return <FreeTrainingClient />;
}