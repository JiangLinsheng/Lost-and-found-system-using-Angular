import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmhomeComponent } from './components/adm_home/adm_home.component';
import { UserhomeComponent } from './components/user_home/user_home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { ThingComponent } from './components/thing/thing.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: 'adm_home', 
    component: AdmhomeComponent,
    children:[
      {
        path:'thing',
        component:ThingComponent
      },
      {
        path:'detail/:id',
        component:DetailComponent
      },
      {
        path: '**', /*任意的路由*/
        //component:ThingComponent
        redirectTo:'thing'
      },
    ]
  },
  {
    path:'user_home',
    component:UserhomeComponent,
    children:[
      {
        path:'thing',
        component:ThingComponent
      },
      {
        path:'detail/:id',
        component:DetailComponent
      },
      {
        path: '**', /*任意的路由*/
        //component:ThingComponent
        redirectTo:'thing'
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'upload',
    component:UploadComponent
  },
  {
    path: '**', /*任意的路由*/
    //component:AdmhomeComponent
    redirectTo:'adm_home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
