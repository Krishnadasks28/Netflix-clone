import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','/node_modules/font-awesome/css/font-awesome.css']
})
export class NavbarComponent {
}
