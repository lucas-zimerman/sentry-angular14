import * as Sentry from '@sentry/capacitor';
import * as SentryAngular from '@sentry/angular';

import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

Sentry.init(
  {
    dsn: 'https://4079af8b316240ea9453eb0a23b715cc@o447951.ingest.sentry.io/5522756',

    // Set your release version, such as "getsentry@1.0.0"
    release: '1234',//my-project-name@<release-name>
    // Set your dist version, such as "1"
    dist: '10000',
    debug: true
  },
  // Forward the init method from @sentry/angular
  SentryAngular.init
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    {
      provide: ErrorHandler,
      useValue: SentryAngular.createErrorHandler(),
     }],
  bootstrap: [AppComponent],
})
export class AppModule {}
