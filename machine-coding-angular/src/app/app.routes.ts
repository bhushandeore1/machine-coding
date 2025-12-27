
import { Routes } from '@angular/router';
// import { StarRatingComponent } from './star-rating.component';
export const routes: Routes = [

  
	{ path: '', redirectTo: 'star-rating', pathMatch: 'full' },
	// { path: 'star-rating', component: StarRatingComponent },
	{ path: '**', redirectTo: 'star-rating' }
];
