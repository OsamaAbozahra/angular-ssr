import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {


  baseUrl = 'https://community-hacker-news-v1.p.rapidapi.com/';
  apiUrl = 'https://community-hacker-news-v1.p.rapidapi.com/topstories.json';

  itemUrl = 'https://community-hacker-news-v1.p.rapidapi.com/item/{id}.json';

  constructor(private http: HttpClient) {
  }

  getNews() {
    return this.http.get(`${this.baseUrl}topstories.json?print=pretty`, {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a9c9734bb7mshffd1cf3a62925b1p1cf288jsn44e42e806b04'
      })
    });
  }

  getNewsById(id: any) {

    return this.http.get(`${this.baseUrl}item/${id}.json?print=pretty`, {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a9c9734bb7mshffd1cf3a62925b1p1cf288jsn44e42e806b04'
      })
    });
  }
}
