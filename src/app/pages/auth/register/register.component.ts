import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {User} from "../../../core/interfaces";
import {Register} from "../../../core/interfaces/register.interface";
import {LoginService} from "../services/login.service";


@Component({
  selector: 'app-register',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule
  ],

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  readonly registerService = inject(LoginService);
  user: Register = {
    email: '',
    name: '',
    password: '',
    confirmPassword:''
  };

  confirmPassword: string = '';

  onSubmit(form: NgForm) {
    if (form.valid && this.user.password === this.user.confirmPassword) {
      const { confirmPassword, ...userWithoutConfirmPassword } = this.user;
      console.log('Formulario enviado', userWithoutConfirmPassword);
      this.registerService.register(userWithoutConfirmPassword).subscribe({
        next: () => {
          console.log('Registro exitoso');
        },
        error: (error) => {
          console.error('Error al registrar', error);
        }
      });
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}
