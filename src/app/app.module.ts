import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemDisplayComponent } from './components/item/item-display/item-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterComponent } from './components/security/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/security/login/login.component';
import { HeaderComponent } from './components/master/header/header.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDEyDXvLfEu1B59iAHLvgvWluRYpZRBi3I',
  authDomain: 'acme-explorer-ad626.firebaseapp.com',
  databaseURL:
    'https://acme-explorer-ad626-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'acme-explorer-ad626',
  storageBucket: 'acme-explorer-ad626.appspot.com',
  messagingSenderId: '458761220785',
  appId: '1:458761220785:web:964c4613315178cce7a890',
};

@NgModule({
  declarations: [AppComponent, ItemDisplayComponent, ItemListComponent, RegisterComponent, LoginComponent, HeaderComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
