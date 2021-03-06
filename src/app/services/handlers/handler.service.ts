import { Router } from '@angular/router';

import { TableRow } from '../../types';

export abstract class HandlerService<T extends TableRow> {
  private _selected: string;
  selectedName: string;
  isNew = false;

  get selected(): string { return this._selected; }

  constructor(
    private mainEditorRoutePath: string,
    protected router: Router,
  ) {}

  select(isNew: boolean, id: string|number, name?: string) {
    this.isNew = isNew;
    this._selected = `${id}`;
    this.selectedName = name;

    this.router.navigate([this.mainEditorRoutePath]);
  }
}
