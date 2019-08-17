import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomePageModule',
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule',
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '**', loadChildren: './error/error.module#ErrorPageModule' },
  { path: 'assistant', loadChildren: './assistant/assistant.module#AssistantPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
