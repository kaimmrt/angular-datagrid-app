import {
  Component,
  DestroyRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ModalTemplateDirective } from '../../../directives/modal.directive';
import { DynamicModalItem } from '../../../models/modal/dynamic-modal-item';
import { EmitterService } from '../../../services/emitter.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
  imports: [ModalTemplateDirective, NgClass],
})
export class BaseModalComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  @ViewChild(ModalTemplateDirective, { static: false })
  public modalTemplate!: ModalTemplateDirective;
  public dynamicTemplate!: DynamicModalItem;
  public status = { open: false };

  public ngOnInit(): void {
    EmitterService.get('openModal')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (value: DynamicModalItem) => {
          console.log('value', value);
          this.dynamicTemplate = value;
          this.loadComponent();
        },
      });

    EmitterService.get('closeModal')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.closeModal();
        },
      });
  }

  public closeModal() {
    this.status.open = false;
    this.clearViewContainer();
  }

  public clearViewContainer() {
    const viewContainerRef = this.modalTemplate.viewContainerRef;
    viewContainerRef.clear();
  }

  private loadComponent() {
    this.status.open = true;
    this.clearViewContainer();

    // create new container
    this.modalTemplate.viewContainerRef.createComponent(
      this.dynamicTemplate.component
    );
  }
}
