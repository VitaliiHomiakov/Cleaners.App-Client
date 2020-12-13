import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {reducers} from './store/reducers';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/effects/auth.effects';
import {UserEffects} from './store/effects/user.effects';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AlertsService} from './services/alerts.service';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, UserEffects]),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertsService,
    AuthGuard,
    AuthService,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
