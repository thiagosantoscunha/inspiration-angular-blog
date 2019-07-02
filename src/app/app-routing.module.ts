import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { CategoryComponent } from './pages/category/category.component';
import { UserComponent } from './pages/user/user.component';
import { SalesLetterPageComponent } from './pages/sales-letter-page/sales-letter-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      breadcrumb: 'Artigos'
    }
  },
  {
    path: 'blog/:slug',
    component: SinglePostComponent,
    data: {
      breadcrumb: 'Artigos'
    }
  },
  {
    path: 'blog/categoria/:categoryId',
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
  {
    path: 'carta/:slug',
    component: SalesLetterPageComponent,
    data: {
      breadcrumb: 'Carta'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
