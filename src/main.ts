import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TranslationsProviders } from './translations.provider';

import 'styles/main.scss';

if (process.env.ENV === 'production') {
  enableProdMode();
}

new TranslationsProviders().providers.then((providers: any) => {
  platformBrowserDynamic().bootstrapModule(AppModule, { providers });
});
