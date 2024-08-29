import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-news-listing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './news-listing.component.html',
  styleUrl: './news-listing.component.scss',
  providers: [
    MatNativeDateModule,

  ],
})
export class NewsListingComponent implements OnInit {
  newsList: any[] = [];
  country = 'us';
  fromDate =new Date();
  toDate = new Date();
  searchQuery = '';

  constructor(private newsService: NewsService,private router: Router) {}

  ngOnInit(): void {
    this.fetchNews();
  };

  navigateToDetail(news: any): void {
    this.newsService.setNewsData(news); // Set data in service
    this.router.navigate(['/news-detail']);
  }
  formatDate(date: Date): string {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  }
  fetchNews(): void {
    const formattedFromDate = this.formatDate(this.fromDate);
    const formattedToDate = this.formatDate(this.toDate);
    this.newsService.getNews(this.country, formattedFromDate, formattedToDate, this.searchQuery).subscribe((data) => {
      this.newsList = data.articles;
    });
  }
}
