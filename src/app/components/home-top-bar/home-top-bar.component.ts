import { Component, inject } from '@angular/core';
import { DynamicModalItem } from '../../models/modal/dynamic-modal-item';
import { ModalAddAccountComponent } from '../modal/modal-add-account/modal-add-account.component';
import { EmitterService } from '../../services/emitter.service';
import { FormsModule } from '@angular/forms';
import { AccountStore } from '../../store/account-store.service';

@Component({
  standalone: true,
  selector: 'app-home-top-bar',
  styleUrls: ['./home-top-bar.component.scss'],
  templateUrl: './home-top-bar.component.html',
  imports: [FormsModule],
})
export class HomeTopBarComponent {
  private accountStore = inject(AccountStore);

  public searchInputValue: string = '';

  public onChangeSearchInputValuue(text: string) {
    this.accountStore.setFilter(text);
  }

  public openAddAccountModal() {
    const value = new DynamicModalItem(ModalAddAccountComponent);
    EmitterService.get('openModal').emit(value);
  }
}
