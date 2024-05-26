import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listActividades: any[] = [];

  agregarActividad(actividad: any){
    console.log('Soy el padre');
    console.log(actividad);
    this.listActividades.push(actividad);

  }
}
