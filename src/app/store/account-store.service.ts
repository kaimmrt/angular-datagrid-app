import { Injectable, computed, signal } from '@angular/core';
import { IAccount, IAddAccountRequest } from '../models/accounts';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class AccountStore {
  private readonly state = {
    $accounts: signal<IAccount[]>([]),
    $filter: signal<string>(''),
  } as const;

  public readonly $accounts = this.state.$accounts.asReadonly();
  public readonly $filter = this.state.$filter;

  public readonly $filteredAccounts = computed(() =>
    this.filterAccount(this.$filter())
  );

  public addAccount(accountsData: IAddAccountRequest[]): void {
    this.state.$accounts.update((accounts: IAccount[]) => [
      ...accounts,
      ...accountsData.map((account) => {
        return { id: uuidv4(), ...account };
      }),
    ]);

    localStorage.setItem('accounts', JSON.stringify(this.state.$accounts()));
  }

  public setFilter(text: string): void {
    this.$filter.set(text);
  }

  public filterAccount(text: string): IAccount[] {
    const filteredAccounts = this.$accounts().filter((item) => {
      const lowerCaseText = text.toLowerCase();

      const matchInField = (field: string) =>
        field.toLowerCase().includes(lowerCaseText);

      return (
        matchInField(item.socialMediaName) ||
        matchInField(item.socialMediaLink) ||
        matchInField(item.description)
      );
    });

    return filteredAccounts;
  }
}
