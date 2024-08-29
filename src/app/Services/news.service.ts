import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { News } from '../Models/news.model';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = 'c225c0da21ab448594727237b0ec94f6';
  private newsData: any;
  constructor(private http: HttpClient) {}

  setNewsData(data: any): void {
    localStorage.setItem('selectedNews', JSON.stringify(data));
    this.newsData = data;
  }

  getNewsData(): any {

    if(this.newsData){
      return this.newsData;
    }else{
     const storedNews = localStorage.getItem('selectedNews');
      if (storedNews) {
        return this.newsData = JSON.parse(storedNews);
      }
    }
  }
  getNews(country: string, from: string, to: string, query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?country=${country}&from=${from}&to=${to}&q=${query}&apiKey=${this.apiKey}`);
// For image testing I used below  API
    //  return this.http.get(`${this.apiUrl}?sources=techcrunch&apiKey=c225c0da21ab448594727237b0ec94f6`);
  }
}
