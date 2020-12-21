import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../shared/Training';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<Array<Training>>{
    return this.http.get<Array<Training>>('http://localhost:8080/trainings');

  }

}
