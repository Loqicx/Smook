import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@Component({
    selector: 'app-root',
    imports: [DashboardComponent],
    template: `<app-dashboard />`,
})
export class AppComponent {
    title = 'smook';
}
