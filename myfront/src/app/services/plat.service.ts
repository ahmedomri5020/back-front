import { Injectable } from '@angular/core';
import { Plat } from '../model/plat.model';
import { Pays } from '../model/pays.model';  // Ensure this is correctly imported from your models
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  private apiURL: string = 'http://localhost:8080/api/plats';  // Base URL for the plats API
  private apiPaysURL: string = 'http://localhost:8080/api/pays';  // Base URL for the countries (pays) API

  constructor(private http: HttpClient) {}

  // Fetch all plats (dishes) from the backend
  listePlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.apiURL).pipe(
      catchError(this.handleError)  // Handle any errors
    );
  }

  // Fetch all countries (pays) from the backend
  listePays(): Observable<{ _embedded: { pays: Pays[] } }> {
    return this.http.get<{ _embedded: { pays: Pays[] } }>(this.apiPaysURL);
  }

  // Add a new plat (dish)
  ajouterPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.apiURL, plat, httpOptions).pipe(
        catchError((error) => {
            console.error('Error during addPlat:', error);  // Log the error for debugging
            return throwError(() => new Error('Something bad happened; please try again later.'));
        })
    );
  }

  // Additional methods remain unchanged...

  // Handle HTTP errors
  private handleError(error: any) {
    console.error('An error occurred:', error); // Log the error to the console
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
