import { Component, } from '@angular/core';

import { SelectComponent } from '../../select.component';
import { CreatureTemplate } from '../creature-template/creature-template.type';
import { CreatureSelectService } from '../../../../services/select/creature-select.service';
import { CreatureHandlerService } from '../../../../services/handlers/creature-handler.service';
import { CREATURE_TEMPLATE_CUSTOM_STARTING_ID, CREATURE_TEMPLATE_ID, CREATURE_TEMPLATE_TABLE } from '../../../../constants';
import { QueryService } from '../../../../services/query.service';

@Component({
  selector: 'app-select-creature',
  templateUrl: './select-creature.component.html',
  styleUrls: ['./select-creature.component.scss']
})
export class SelectCreatureComponent extends SelectComponent<CreatureTemplate> {
  constructor(
    public selectService: CreatureSelectService,
    public handlerService: CreatureHandlerService,
    public queryService: QueryService,
  ) {
    super(
      CREATURE_TEMPLATE_TABLE,
      CREATURE_TEMPLATE_ID,
      CREATURE_TEMPLATE_CUSTOM_STARTING_ID,
      selectService,
      handlerService,
      queryService,
    );
  }
}
