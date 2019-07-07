import {Component, OnInit} from '@angular/core';
import {News} from '../services/mocked-news';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {


  newsList;
  apiUrl = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-07&sortBy=publishedAt&apiKey=283db18341c04ec18f94fa6dee296f6d';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getNews()
      .subscribe((data: any) => {
        this.newsList = data.articles;
      });
  }

  getNews() {
    return this.http.get(this.apiUrl);
  }

}
