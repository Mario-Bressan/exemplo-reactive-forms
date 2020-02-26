import {AbstractControl} from '@angular/forms';

export class UserValidator {
  static validaCpf(controle: AbstractControl){
    const cpf = controle.value;

    if (cpf.length > 10) {
      return null;
    }

    return {cpfInvalido: true};
  }
}
