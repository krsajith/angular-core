import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  languages = [
    { code: 'EN', name: 'Engilish' },
    { code: 'FR', name: 'French' },
    { code: 'PT', name: 'Portuguese' },
  ]

  constructor(private http: HttpClient) {
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${path}`);
  }
}
