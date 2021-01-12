import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ListItem } from './data-list/data-list.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map(item => {
      return item as ListItem;
    }));
  }
}