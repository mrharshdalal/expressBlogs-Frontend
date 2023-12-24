import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  user: any;
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private signinService: SigninService, 
    private router: Router,
    ) {}

  public getUserByEmail(): void {
    console.log(this.userEmail);
    console.log(this.userPassword);

    this.signinService.getUserByEmail(this.userEmail).subscribe(
      (response) => {
        this.user = response;
        console.log('User Details:', this.user);
        // console.log('i am here', this.user.password);
        if (this.userPassword == this.user.password) {
          console.log('login successfull');
          // console.log(this.user.userId);
          this.router.navigate(['/home'], { queryParams: { userId: this.user.userId } });
          console.log("navigation successfull");
        } 
        else 
          console.log('incorrect credentials');
      },
      (error) => {
        console.error('Error fetching user by email' + this.userEmail, error);
      }
    );
  }
}
