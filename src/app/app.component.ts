import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
  imports: [ParentComponent]
})
export class AppComponent {

}
