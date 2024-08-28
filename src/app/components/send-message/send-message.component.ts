import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css',
})
export class SendMessageComponent implements OnInit {
  number!: any;
  message!: string;
  ngOnInit(): void {}
  whatsappService = inject(WhatsappService);

  handleSubmit(messageForm: NgForm) {
    console.log(this.number, this.message);
    if (this.message == undefined) {
      alert('Please send valid message');
      return;
    }
    if (this.number == undefined) {
      alert('Number can not be empty');
      return;
    }
    this.whatsappService.sendMessage(this.number, this.message);
    messageForm.reset();
  }
}
