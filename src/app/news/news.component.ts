import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  id: any;
  news: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.newsService.getNewsById(this.id).subscribe((data) => {
      this.news = data;
    });
  }
}
