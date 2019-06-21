import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryComponent } from './pages/category/category.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/artigos',
    pathMatch: 'full'
  },
  {
    path: 'artigos',
    component: BlogComponent,
    data: {
      breadcrumb: 'Artigos'
    }
  },
  {
    path: 'artigos/:id',
    component: ArticleComponent,
    data: {
      breadcrumb: 'Artigos'
    }
  },
  {
    path: 'artigos/categoria/:categoryId',
    component: CategoryComponent,
    data: {
      breadcrumb: 'Categorias'
    }
  },
  {
    path: 'autor/:id',
    component: UserComponent,
    data: {
      breadcrumb: 'Autor'
    }
  },
  {
    path: 'sobre',
    component: AboutComponent,
    data: {
      breadcrumb: 'Sobre'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
