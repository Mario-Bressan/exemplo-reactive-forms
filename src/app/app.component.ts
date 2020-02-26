import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserValidator} from './user-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildUsuarioForm();
  }

  enviarDados() {
    console.log(this.usuarioForm.value);
  }

  buildUsuarioForm() {
    this.usuarioForm = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      email: '',
      cpf: [
        '',
        Validators.compose([Validators.required,
        UserValidator.validaCpf])
      ]
    });
  }

  // Propriedades do formulário que vamos utilizar para obter os erros
  get nome() {
    return this.usuarioForm.get('nome');
  }

  get email() {
    return this.usuarioForm.get('email');
  }

  get cpf() {
    return this.usuarioForm.get('cpf');
  }

}
