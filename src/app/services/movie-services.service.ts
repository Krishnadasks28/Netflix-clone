import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tmdbconfig } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {

  constructor(private httpService: HttpClient) { }
  limit:number = 5
  getMovies() {
    const headers = this.getHeaders()
    return this.httpService.get(`https://api.themoviedb.org/3/movie/popular?limit=${this.limit}`, {
      headers: headers
    })
  }

  getNowPlaying(){
    const headers = this.getHeaders()
    return this.httpService.get(`https://api.themoviedb.org/3/movie/now_playing?limit=${this.limit}`,{headers:headers})
  }

  getUpcoming(){
    const headers = this.getHeaders()
    return this.httpService.get(`https://api.themoviedb.org/3/movie/upcoming?limit=${this.limit}`,{headers:headers})
  }

  getHeaders() {
    let headers = new HttpHeaders()
    headers = headers.append("accept", "application/json")
    headers = headers.append("Authorization", "Bearer " + tmdbconfig.accessToken)
    return headers
  }
}
