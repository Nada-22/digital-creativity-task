import { Component } from '@angular/core';
import { featureBarItems } from './items';

@Component({
  selector: 'app-feature-bar',
  templateUrl: './feature-bar.component.html',
  styleUrls: ['./feature-bar.component.scss']
})
export class FeatureBarComponent {

  items=featureBarItems;
}
