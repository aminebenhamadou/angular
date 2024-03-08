import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab:any[]=GLOBAL.DB.articles;
  constructor() { }


  deleteArticleById(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise()
    //link : 127.0.0.1:8080/id
    this.tab=this.tab.filter(item=>item.id!= id)
    return new Promise(resolve=> resolve() )
  }
}