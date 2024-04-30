import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('Se han pedido los heroes')),
      catchError(_ => {
        this.log('Error al recibir los heroes');
        return of([])})
    )
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(_ => this.log('Se han pedido los heroes')),
      catchError(_ => {
        this.log('Error al pedir el heroe');
        return of({} as Hero);
      })
    )
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}