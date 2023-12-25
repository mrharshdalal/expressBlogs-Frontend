import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import { SignupService } from './signup.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user : any
  fullname: string = '';
  email: string = '';
  username: string = '';
  gender: string = '';
  logourl: string = '';
  password: string = '';
  confirmpassword: string = '';
  timestamp: string = '';

  constructor(private signupService: SignupService,
    private router:Router){}

  addNewUser() {
    // console.log(this.fullname);
    // console.log(this.email);
    // console.log(this.username);
    // console.log(this.gender);
    // console.log(this.logourl);
    // console.log(this.password);
    // console.log(this.confirmpassword);
    // console.log(this.timestamp);
    
    if(this.password === this.confirmpassword){
      const newUser : User = {
        fullname: this.fullname,
        email: this.email,
        username: this.username,
        gender: this.gender,
        logourl: this.logourl,
        password: this.password,
        // timestamp: this.timestamp,
      };

      this.signupService.addNewUser(newUser).subscribe(
        (response) => {
          const userId = response.userid;  // Use "userid" here
          // console.log(response.fullname);
          console.log('User added successfully:', response);
          // You can do further handling if needed
          this.router.navigate(['/home'], { queryParams: { userId: userId } });
          console.log("navigation successfull");
        },
        (error) => {
          console.error('Error adding user:', error);
          // Handle the error as needed
        }
      );
    }
    
    
  }
}
