import { Routes } from '@angular/router';
import { PrimaryAcademics } from './pages/academics/primary-academics/primary-academics';
import { PrePrimaryAcademics } from './pages/academics/pre-primary-academics/pre-primary-academics';
import { Academics } from './pages/academics/academics';
import { Primary } from './pages/section/primary/primary';
import { PrePrimary } from './pages/section/pre-primary/pre-primary';
import { Section } from './pages/section/section';
import { ContactUs } from './pages/contact-us/contact-us';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Achievements } from './pages/achievements/achievements';
import { EventsNews } from './pages/events-news/events-news';

export const routes: Routes = [
     { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'achievements', component: Achievements },
  { path: 'events-news', component: EventsNews },
  { path: 'contact-us', component: ContactUs },

  {
    path: 'section',
    component: Section,
    children: [
      { path: 'pre-primary', component: PrePrimary },
      { path: 'primary', component: Primary }
    ]
  },

  {
    path: 'academics',
    component: Academics,
    children: [
      { path: 'pre-primary', component: PrePrimaryAcademics },
      { path: 'primary', component: PrimaryAcademics }
    ]
  },

  { path: '**', redirectTo: '' }

];
