import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  providers: [HttpService]
})
export class DataListComponent implements OnInit {

  items: Observable<ListItem>;
  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.items = this.httpService.getData();
  }
}

export interface ListItem{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}