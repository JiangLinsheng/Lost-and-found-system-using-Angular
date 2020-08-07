import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmhomeComponent } from './components/adm_home/adm_home.component';
import { UserhomeComponent } from './components/user_home/user_home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { ThingComponent } from './components/thing/thing.component';
import { DetailComponent } from './components/detail/detail.component';

import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    AdmhomeComponent,
    UserhomeComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    ThingComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
