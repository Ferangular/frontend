import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router)

  public myForm: FormGroup = this.fb.group({
    email: ['fer@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const {email, password} = this.myForm.value;

    this.loginService.login(email, password).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigateByUrl('/dashboard')
        },
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }
}
