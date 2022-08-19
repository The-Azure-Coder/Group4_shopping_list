import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'items',
    component: AllItemsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'add-item',
    component: AddItemsComponent,
  },
  {
    path: 'add-category',
    loadChildren: () =>
      import('./add-category/add-category.module').then(
        (m) => m.AddCategoryPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
