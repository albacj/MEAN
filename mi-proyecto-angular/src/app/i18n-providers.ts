import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
export function getTranslationProviders(): Promise<Object[]> {
  const locale = document['locale'] as string;
  const noProviders: Object[] = [];
  if (!locale || locale === 'en-US') {
    return Promise.resolve(noProviders);
  }
  return getTranslationsWithES6Import(locale)
  .then((translations: string ) => [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    { provide: LOCALE_ID, useValue: locale }
  ])
  .catch(() => noProviders);
}
declare var System: any;
function getTranslationsWithES6Import(locale: string) {
  return System.import('../locale/messages.' + locale + '.xlf');
}

const locale = document['locale'] as string;
  export function getLocaleProvider(): String {
  return locale;
}
