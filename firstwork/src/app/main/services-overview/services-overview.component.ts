import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.css'
})
export class ServicesOverviewComponent {
  @Input() carServices!: string[];
}
