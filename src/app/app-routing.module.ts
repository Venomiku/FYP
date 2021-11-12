import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'quizz',
    loadChildren: () => import('./quizz/quizz.module').then( m => m.QuizzPageModule)
  },
  {
    path: 'chapters',
    loadChildren: () => import('./chapters/chapters.module').then( m => m.ChaptersPageModule)
  },
  {
    path: 'standard',
    loadChildren: () => import('./standard/standard.module').then( m => m.StandardPageModule)
  },
  {
    path: 'standard2',
    loadChildren: () => import('./standard2/standard2.module').then( m => m.Standard2PageModule)
  },
  {
    path: 'standard3',
    loadChildren: () => import('./standard3/standard3.module').then( m => m.Standard3PageModule)
  },
  {
    path: 'standard4',
    loadChildren: () => import('./standard4/standard4.module').then( m => m.Standard4PageModule)
  },
  {
    path: 'standard5',
    loadChildren: () => import('./standard5/standard5.module').then( m => m.Standard5PageModule)
  },
  {
    path: 'standard6',
    loadChildren: () => import('./standard6/standard6.module').then( m => m.Standard6PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qstandard1',
    loadChildren: () => import('./qstandard1/qstandard1.module').then( m => m.Qstandard1PageModule)
  },
  {
    path: 'qstandard2',
    loadChildren: () => import('./qstandard2/qstandard2.module').then( m => m.Qstandard2PageModule)
  },
  {
    path: 'qstandard3',
    loadChildren: () => import('./qstandard3/qstandard3.module').then( m => m.Qstandard3PageModule)
  },
  {
    path: 'qstandard4',
    loadChildren: () => import('./qstandard4/qstandard4.module').then( m => m.Qstandard4PageModule)
  },
  {
    path: 'qstandard5',
    loadChildren: () => import('./qstandard5/qstandard5.module').then( m => m.Qstandard5PageModule)
  },
  {
    path: 'qstandard6',
    loadChildren: () => import('./qstandard6/qstandard6.module').then( m => m.Qstandard6PageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
