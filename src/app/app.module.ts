import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {UserAuthModule} from "./user-auth/user-auth.module"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { StdDataComponent } from './std-data/std-data.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    StdDataComponent,
    CountryListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
