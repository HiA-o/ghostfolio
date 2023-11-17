import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GfPremiumIndicatorModule } from '@ghostfolio/ui/premium-indicator';

@Component({
  host: { class: 'page' },
  imports: [GfPremiumIndicatorModule, MatButtonModule, RouterModule],
  selector: 'gf-black-friday-2023-page',
  standalone: true,
  templateUrl: './black-friday-2023-page.html'
})
export class BlackFriday2023PageComponent {
  public routerLinkFeatures = ['/' + $localize`features`];
  public routerLinkPricing = ['/' + $localize`pricing`];
}
