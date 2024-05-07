import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ISocialMediaLink } from '../../models/navbar/social-media-link.interface';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [NgClass, RouterLink],
})
export class NavbarComponent {
  public isResponsive: boolean = false;

  public socialMediaLinks: ISocialMediaLink[] = [
    {
      img: '../../../assets/youtube.svg',
      link: 'https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw',
      alt: 'youtube',
    },
    {
      img: '../../../assets/instagram.svg',
      link: 'https://www.instagram.com/mobilerast/',
      alt: 'instagram',
    },
    {
      img: '../../../assets/behance.svg',
      link: 'https://www.behance.net/rastmobile',
      alt: 'behance',
    },
    {
      img: '../../../assets/linkedin.svg',
      link: 'https://www.linkedin.com/company/rastmobile/',
      alt: 'linkedin',
    },
  ];

  public toggleNavbar() {
    this.isResponsive = !this.isResponsive;
  }
}
