'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/i18n';
import { ReactNode, Suspense } from 'react';

interface I18nProviderProps {
  children: ReactNode;
}

// To prevent a hydration error (UI flicker), we wrap the provider in a Suspense boundary.
// This tells React to wait for the i18n initialization to complete before rendering the children.
export default function I18nProvider({ children }: I18nProviderProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  );
}
