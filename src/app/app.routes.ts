import { Routes } from '@angular/router';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

export const routes: Routes = [
  { path: 'news', component: NewsListingComponent },
  { path: 'news-detail', component: NewsDetailComponent },
  { path: '**', redirectTo: 'news' }
];

