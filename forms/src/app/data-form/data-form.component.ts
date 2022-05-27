import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    //assim ou de baixo
   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep: new FormControl(null)
      })
    });*/

    this.formulario = this.formBuilder.group({
      //nome: [null, Validators.required], apenas 1 validador
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

    //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

  }

  onSubmit() {
    console.log(this.formulario);
    
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    //.subscribe(dados => this.populaDadosForm(dados, form));
    .subscribe(dados => {
      console.log(dados);
      //reseta form
      this.formulario.reset();
    },
    (error: any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: string){

    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
    //return !campo.valid && campo.touched;
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors){
      return campoEmail?.errors['email'] && campoEmail?.touched;
    }
  }

  aplicaCssErro(campo: string){
    return {
      //'is-invalid': !campo.valid && campo.touched
      'is-invalid': this.verificaValidTouched(campo),
      //'has-error': this.verificaValidTouched(campo),
    }
  }

}
