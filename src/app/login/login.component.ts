import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService,
    private tokenService: TokenStorageService) { 

    }

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form)
    .subscribe(
      (data)=>{
        console.table(data);
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);

        this.isLoginFailed=false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.reloadPage();
      },
    (err) => {
      this.errorMessage = err.error.message;
      this.isLoginFailed=true;
      this.isLoggedIn = false;
    });
  }

  reloadPage() {
    window.location.reload();
  }

}
