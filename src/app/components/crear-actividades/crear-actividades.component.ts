import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-actividades',
  templateUrl: './crear-actividades.component.html',
  styleUrls: ['./crear-actividades.component.css']
})
export class CrearActividadesComponent implements OnInit {

  nombre = '';
  fecha = '';
  hora = '';
  descripcion='';
  formularioIncorrecto = false;

  constructor() { }

  ngOnInit(): void {
  }

  agregarActividad(){
    if(this.nombre == '' || this.fecha =='' || this.hora =='' || this.descripcion ==''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
   // @Output() nuevaActividad: EventEmitter<any> = new EventEmitter();



    //creamos objeto para enviar al padre
    const ACTIVIDAD = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora:this.hora,
      descripcion: this.descripcion
    }
    console.log(ACTIVIDAD);

    this.resetCampos();
  }
  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.descripcion ='';
  }

}
