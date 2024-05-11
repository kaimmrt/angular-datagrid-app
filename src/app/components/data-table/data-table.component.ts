import { Component, Input } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  standalone: true,
  selector: 'app-data-table',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html',
  imports: [DxDataGridModule],
})
export class DataTableComponent {
  @Input({ required: true }) public data: any[] = [];
  public readonly allowedPageSizes = [5, 10];
}
