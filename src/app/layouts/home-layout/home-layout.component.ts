import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-home-layout',
  styleUrls: ['./home-layout.component.scss'],
  templateUrl: './home-layout.component.html',
  imports: [NavbarComponent],
})
export class HomeLayoutComponent {}
