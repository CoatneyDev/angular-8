import { Component, Input, OnInit, ComponentFactoryResolver } from '@angular/core';
//import { MatDialog, MatDialogConfig, MatDialogContent } from '@angular/material/dialog';

import { DynamicDataInterface } from '../../interfaces/dynamic-data.interface';
//import { DynamicDataService } from '../../services/dynamic-data.service';

@Component({
  selector: 'coatneydev-dynamic-data',
  template: `
                <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <ng-template dialogContentTemplate></ng-template>
                </div>
  `,
  styleUrls: ['./dynamic-data.component.scss']
})
export class DynamicDataComponent implements DynamicDataInterface {
  @Input() data: any = { name: 'Name', bio: '<strong>BIO</strong>' };

  constructor() {

  }

}
