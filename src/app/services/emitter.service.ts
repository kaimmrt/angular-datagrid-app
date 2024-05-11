import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmitterService {
  private static emitters: { [id: string]: EventEmitter<any> } = {};
  public static get(id: string): EventEmitter<any> {
    if (!this.emitters[id]) {
      this.emitters[id] = new EventEmitter();
    }
    return this.emitters[id];
  }
}
