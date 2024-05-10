import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../layouts/home-layout/home-layout.component';
import { DxDataGridModule } from 'devextreme-angular';
import { v4 as uuidv4 } from 'uuid';

@Component({
  standalone: true,
  selector: 'app-home-page',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  imports: [HomeLayoutComponent, DxDataGridModule],
})
export class HomeComponent {
  public readonly allowedPageSizes = [5, 10];
  public data = [
    {
      id: uuidv4(),
      socialMediaLink: 'instagram.com/mobilerast/',
      socialMediaName: 'instagram',
      description:
        "We'll help you to finish your development project successfully.",
    },
    {
      id: uuidv4(),
      socialMediaLink: 'tr.linkedin.com/company/rastmobile',
      socialMediaName: 'linkedin',
      description:
        'Hire vetted developers from Rast Mobile to scale up your tech projects.',
    },
    {
      id: uuidv4(),
      socialMediaLink: 'behance.net/rastmobile',
      socialMediaName: 'behance',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
    {
      id: uuidv4(),
      socialMediaLink: 'twitter.com/rastmobile',
      socialMediaName: 'twitter',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
    {
      id: uuidv4(),
      socialMediaLink: 'twitter.com/rastmobile',
      socialMediaName: 'twitter',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
    {
      id: uuidv4(),
      socialMediaLink: 'twitter.com/rastmobile',
      socialMediaName: 'twitter',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
    {
      id: uuidv4(),
      socialMediaLink: 'twitter.com/rastmobile',
      socialMediaName: 'twitter',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
  ];
}
