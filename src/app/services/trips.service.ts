import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../common/constants';
import { Trip } from '../models/trips.model';

export interface TripResponse {
  data: Trip[];
  itemCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(@Inject(API_URL) public apiUrl, private http: HttpClient) {}

  query(aid:string, search: Partial<Trip>): Observable<Trip[]> {
    const searchObject: any = search;
    const url = `${this.apiUrl}/trips/${aid}`;
    console.log('going to url ', url, 'search: ', search)
    const params = new HttpParams({ fromObject: searchObject });
    return this.http.get<Trip[]>(url, { params });
  }

  create(trip: Trip): Observable<Trip> {
    const url = `${this.apiUrl}/trips/${trip.account_id}`;
    return this.http.post<Trip>(url, trip);
  }

  update(trip: Trip): Observable<Trip> {
    const url = `${this.apiUrl}/trips/${trip.account_id}/${trip.id}`;
    return this.http.put<Trip>(url, trip);
  }

  delete(aid: string, id: string): Observable<Trip> {
    const url = `${this.apiUrl}/trips/${aid}/${id}`;
    return this.http.delete<Trip>(url);
  }
}
