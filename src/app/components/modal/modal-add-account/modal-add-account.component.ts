import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmitterService } from '../../../services/emitter.service';
import { AccountStore } from '../../../store/account-store.service';

@Component({
  standalone: true,
  selector: 'app-modal-add-account',
  styleUrls: ['./modal-add-account.component.scss'],
  templateUrl: './modal-add-account.component.html',
  imports: [ReactiveFormsModule],
})
export class ModalAddAccountComponent implements OnInit {
  private fb = inject(FormBuilder);
  private accountStore = inject(AccountStore);

  public form!: FormGroup;

  public ngOnInit(): void {
    this.createForm();
  }

  public closeModal() {
    EmitterService.get('closeModal').emit();
  }

  public onSubmit() {
    this.accountStore.addAccount([this.form.value]);
    this.closeModal();
  }

  private createForm() {
    this.form = this.fb.group({
      socialMediaName: [''],
      socialMediaLink: [''],
      description: [''],
    });
  }
}
