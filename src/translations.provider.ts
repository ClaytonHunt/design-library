import { CompilerConfig } from '@angular/compiler';
import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
import { translations as trans } from './locale';

export class TranslationsProviders {
  private localeKey: string = 'locale';
  private locale: any = document[this.localeKey] || window.localStorage.getItem(this.localeKey);
  private noProviders: any[] = [];

  get providers() {
    return new Promise((resolve) => {
      const translations = trans[this.locale];

      // No locale or English: no translation providers
      if (!this.locale || this.locale === 'en' || !translations) {
        resolve(this.noProviders);
      } else {
        resolve([
          { provide: TRANSLATIONS, useValue: translations },
          { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
          { provide: LOCALE_ID, useValue: this.locale },
          { provide: CompilerConfig, useValue: new CompilerConfig({ missingTranslation: MissingTranslationStrategy.Ignore }) }
        ]);
      }
    });
  }
}
