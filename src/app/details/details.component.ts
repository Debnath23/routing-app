import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="text-white text-xl text-center pt-12">
      Details works!
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
