import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import 'rxjs/add/operator/map';
//import 'core-js/features/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }
  resultado: any;

  onSubmit(formulario: any){
    console.log(formulario.value);

    //console.log(this.usuario);
    this.Http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
    //.subscribe(dados => this.populaDadosForm(dados, form));
    .subscribe(dados => {
      console.log(dados);
      formulario.form.reset();
    });
  }

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
      //'is-invalid': !campo.valid && campo.touched
      'is-invalid': this.verificaValidTouched(campo),
      //'has-error': this.verificaValidTouched(campo),
    }
  }

  consultaCEP(cep: string, form: any){
    var cep = cep.replace(/\D/g, '');

    if (cep != ""){
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {

        this.resetaDadosForm(form);
        this.Http.get(`//viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados: any, formulario: any){
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }

    });*/

    formulario.form.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    });

    //console.log(formulario);
  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }
  

}
