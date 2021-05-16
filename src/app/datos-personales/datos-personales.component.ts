import { Component, OnInit } from '@angular/core';
import {MatCard } from '@angular/material/card';
import { datosPersonales } from './datos-personales';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  datosPersonales:datosPersonales;

  constructor() { 
    this.datosPersonales = {
      nombre:"Francisco José González Miranda",
      profesion:"Software developer",
      mail:"franciscogonmir@gmail.com",
      telefono:"610 97 90 74",
      descripcion:"Apasionado del desarrollo de software.Me encanta aprender nuevas técnicas para mejorar.Gran capacidad para no rendirme ante los problemas"
    }
  }

  ngOnInit(): void {
  }

}
