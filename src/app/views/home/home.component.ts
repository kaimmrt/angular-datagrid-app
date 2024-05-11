import { Component, OnInit, inject } from '@angular/core';
import { HomeLayoutComponent } from '../../layouts/home-layout/home-layout.component';
import { AccountStore } from '../../store/account-store.service';
import { HomeTopBarComponent } from '../../components/home-top-bar/home-top-bar.component';
import { DataTableComponent } from '../../components/data-table/data-table.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  imports: [HomeLayoutComponent, HomeTopBarComponent, DataTableComponent],
})
export class HomeComponent implements OnInit {
  private accountStore = inject(AccountStore);

  public $accounts = this.accountStore.$filteredAccounts;

  public ngOnInit(): void {
    this.setLocaleStorageItems();
  }

  private setLocaleStorageItems() {
    if (!localStorage.getItem('accounts')) {
      return;
    }
    this.accountStore.addAccount(
      JSON.parse(localStorage.getItem('accounts') as string)
    );
  }
}
