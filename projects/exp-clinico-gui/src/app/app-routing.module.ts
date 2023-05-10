import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./layout/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./layout/private/private.module').then(m => m.PrivateModule)
  },
  {path: 'patients', loadChildren: () => import('./features/patients/patients.module').then(m => m.PatientsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
