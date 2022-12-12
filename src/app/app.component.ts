import { Component, ViewChild } from '@angular/core';
import {LeminCroppedCaptchaComponent, LeminCroppedCaptchaService} from "@leminnow/ng-lemin-cropped-captcha";
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(LeminCroppedCaptchaComponent) leminCroppedCaptcha!: LeminCroppedCaptchaComponent;
  
  captchaId = 'YOUR_CAPTCHA_ID';
  containerId = 'YOUR_CONTAINER_ID';

  /*
  Or you can use service as a second way:

  constructor(private leminCroppedCaptchaService: LeminCroppedCaptchaService) {
  }

  getCaptchaValues() {
    return this.leminCroppedCaptchaService.getCaptcha(this.captchaId).getCaptchaValue()
  }
  */

  onSubmit(contents: {username: '', password: ''}){
    const leminData = this.leminCroppedCaptcha.getCaptchaValue();
    
    // const leminData = this.getCaptchaValues(); second way to get values
    
    if (!leminData || !contents.username || !contents.password) {
      alert('Oops!..CAPTCHA answer has not been verified!');
      return;
    }

    const formData = new FormData();
    formData.append('username', contents.username);
    formData.append('password', contents.password);
    formData.append('challenge_id', leminData.challenge_id);
    formData.append('answer', leminData.answer);

    axios.post('http://localhost:3005/sign-in', formData,
            { headers: {'Content-Type': 'application/json' }}
        ).then(res => {
          if (res.data.success) {
            alert('Successfully validated!');
          } else {
            alert(res.data.message)
          }
        })
  }

 
}

