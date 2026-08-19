import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [ CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true
})
export class ChildComponent {


}
