"use client";

import { useTranslations } from "next-intl";

export default function Landing() {
  const t = useTranslations("client-component");
  return <h1>{t("title")}</h1>;
}
