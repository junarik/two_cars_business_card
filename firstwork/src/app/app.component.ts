import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstwork';
}
