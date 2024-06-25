import { Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ServicesComponent } from './Pages/services/services.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
];
