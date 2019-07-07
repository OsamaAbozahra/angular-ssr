import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {News} from '../services/mocked-news';
import {NewsModel} from '../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList = News;
  news: NewsModel;

  constructor(private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.news = this.findProductById(id);
  }

  ngOnInit() {
  }

  findProductById(newsId: number): NewsModel {
    return this.newsList.find(news => news.id === newsId);
  }
}
