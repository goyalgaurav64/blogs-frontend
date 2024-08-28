import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  contactForm! : FormGroup;

  constructor(private http:HttpClient,private emailService:EmailService ){}

  ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        emailId:"",
        emailSubject:"",
        message:""
      });
  }


  handleSubmit(){
    console.log("Email Sent",this.contactForm.value);
    if(this.contactForm.value.emailId === '' || this.contactForm.value.emailSubject === '' || this.contactForm.value.message === ''){
      alert("Please fill all the fields");
      return;
    }

    debugger

    const emailData = {
      to: 'goyal.g@outlook.com',
      subject: this.contactForm.value.emailSubject,
      text: this.contactForm.value.message,
      host: 'smtp.gmail.com',
      authUser: 'gauravgoyalgg11@gmail.com', // email id of the user who is submitting this form
      authPass: 'Gaur@vGoy@L@11.gg', // Use an Google app  Password of 2-factor authentication is enabled
      fromTitle: this.contactForm.value.email
      };

    this.emailService.sendMail(emailData).subscribe(
      (response) => {
        console.log('Email sent successfully', response)
        const btn = document.getElementById('confirmationBtn');
        btn?.click();
      },
      (error) => {
        console.error('Error sending email', error);
      });

    //this.contactForm.reset();
  }
}
