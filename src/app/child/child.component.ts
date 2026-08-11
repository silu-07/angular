import { Component } from '@angular/core';
import { TailwindComponent } from "../tailwind/tailwind.component";

@Component({
  selector: 'app-child',
  imports: [TailwindComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {

}
