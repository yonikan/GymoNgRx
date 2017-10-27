import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  private actionsArr;

  constructor() {
    this.actionsArr = [
      // 'back',
      'add_widget',
      'save_dashboard'
    ];
  }

  getActions() {
    return this.actionsArr;
  }

}
