// src/components/ClientProviders.tsx
"use client";

import { I18nProvider } from "@/context/i18nContext";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nProvider>{children}</I18nProvider>;
}
