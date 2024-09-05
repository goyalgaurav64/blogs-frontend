import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  list = [1,2,3,4,5,6,7,8];
}
