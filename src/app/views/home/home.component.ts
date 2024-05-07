import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../layouts/home-layout/home-layout.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  imports: [HomeLayoutComponent],
})
export class HomeComponent {}
