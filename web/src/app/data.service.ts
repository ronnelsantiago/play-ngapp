import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiEndPoint = environment.apiEndPoint;

  constructor(private http: HttpClient) {}

  getFoo(): Observable<any> {
    return this.http.get(`${this.apiEndPoint}/WeatherForecast`);
  }
}
