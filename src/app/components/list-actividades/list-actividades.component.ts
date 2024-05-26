import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent implements OnInit {
  @Input() ListadoActividades: any;
  @Output() deleteActividad = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(index: number) {
    this.deleteActividad.emit(index);
  }

}
