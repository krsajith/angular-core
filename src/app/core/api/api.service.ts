import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  languages = [
    { code: 'EN', name: 'Engilish' },
    { code: 'FR', name: 'French' },
    { code: 'PT', name: 'Portuguese' },
  ]

  constructor(private http: HttpClient) {
  }

  post(path: string, entity: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity);
  }

  postEvents(path: string, entity: any): Observable<any> {
    return this.http.post(`${environment.apiEndpoint}/${path}`, entity, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }

  get(path: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiEndpoint}${path}`);
  }

  getById(path: string, id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoint}/${path}/${id}`);
  }

  createUpload(path: string, entity: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity);
  }

  get httpClient() {
    return this.http;
  }
}
