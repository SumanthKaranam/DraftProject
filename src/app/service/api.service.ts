import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getDataList(): Observable<any> {
    return this.http.get<any>('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
