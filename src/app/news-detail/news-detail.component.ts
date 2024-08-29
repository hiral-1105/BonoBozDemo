import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-news-detail',
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
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
  providers:[DatePipe]
})
export class NewsDetailComponent {
  formattedDate:any ;
  newsDetail:any

  constructor(private newsService: NewsService,private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.newsDetail = this.newsService.getNewsData();
    if (this.newsDetail && this.newsDetail.publishedAt) {

      this.formattedDate = this.datePipe.transform(this.newsDetail.publishedAt, 'dd/MM/yyyy');
    }
  }
}
