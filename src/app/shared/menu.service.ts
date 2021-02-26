import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url: string = "../../assets/data/menu.json";

  constructor(private http:HttpClient) { }

  getData(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>(this._url);
  }
  
}
