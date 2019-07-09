import {Component, OnInit} from '@angular/core';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {


  idsList;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe((data: any) => {
        this.idsList = data;
      });
  }


}
