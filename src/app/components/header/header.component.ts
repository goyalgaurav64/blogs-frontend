import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { BlogcardComponent } from '../blogcard/blogcard.component';
import { SendMessageComponent } from '../send-message/send-message.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    SearchComponent,
    BlogcardComponent,
    SendMessageComponent,
    ContactUsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  route = inject(Router);
}
