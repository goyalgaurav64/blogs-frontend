import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'blog-detail/:id',
    component: BlogDetailComponent,
  },
  {
    path: 'send-message',
    component: SendMessageComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'create-blog',
    component: CreateComponent,
  },
];
