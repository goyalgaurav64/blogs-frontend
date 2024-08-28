import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WhatsappService implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendMessage(mobileNumber: number, message: string) {
    let number = mobileNumber;

    let url = `https://web.whatsapp.com/send?phone=${number}`;

    url += `&text=${encodeURI(message)}&app_absent=0`;

    // if to send to multiple contacts without specifying particular contact

    // let url = `https://web.whatsapp.com/send?`;

    // url += `text=${encodeURI(message)}&type=custom_url&app_absent=0`;

    window.open(url);
  }
}
