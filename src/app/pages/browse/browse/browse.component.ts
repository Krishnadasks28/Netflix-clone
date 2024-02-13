import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { MovieCategoryComponent } from '../../../components/movie-category/movie-category.component';
import { CommonModule } from '@angular/common';
import { MovieServicesService } from '../../../services/movie-services.service';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent, CommonModule,NavbarComponent],
  templateUrl: './browse.component.html',
  styleUrl:'./browse.component.css'
})
export class BrowseComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private movieServices: MovieServicesService) { }

  movieList: any[] = []
  nowPlaying: any[] = []
  upcoming: any[] = []
  bannerMovie:any;
  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/login')
    }

    this.movieServices.getMovies().subscribe((result: any) => {
      this.movieList = result.results
      this.bannerMovie = this.movieList[0]
    })

    this.movieServices.getNowPlaying().subscribe((result: any) => {
      this.nowPlaying = result.results
      console.log("Now playing : ", this.nowPlaying)
    })

    this.movieServices.getUpcoming().subscribe((result:any)=>{
      this.upcoming = result.results
    })

  }


}
