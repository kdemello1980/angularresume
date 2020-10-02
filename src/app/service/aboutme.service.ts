import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { Cert } from '../model/cert';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../model/employer';
import { Title } from '../model/title';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  baseURL = 'http://ec2-3-91-72-140.compute-1.amazonaws.com:8080';
  httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  };

  constructor(private httpCli: HttpClient) { }

  /**
   * Get a list of certifications.
   */
  getCerts(): Observable<Cert[]> {
    return this.httpCli.get<Cert[]>(`${this.baseURL}/certifications`, this.httpHead);
  }

  /**
   * Get a list of employers.
   */
  getEmployers(): Observable<Employer[]> {
    return this.httpCli.get<Employer[]>(`${this.baseURL}/employers`, this.httpHead);
  }

  /**
   * Get a list of titles for a particular employer.
   */
  getTitlesByEmployer(id: number): Observable<Title[]> {
    // console.log(id);
    return this.httpCli.get<Title[]>(`${this.baseURL}/titles/employer/${id}`, this.httpHead);
  }

  /**
   * Get a list of resume items for a particular title.
   */
  getItemsByTitle(id: number): Observable<Item[]> {
    return this.httpCli.get<Item[]>(`${this.baseURL}/items/title/${id}`, this.httpHead);
  }
}
