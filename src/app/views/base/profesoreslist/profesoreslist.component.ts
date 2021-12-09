import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../../myservice.service';

@Component({
  selector: 'app-profesoreslist',
  templateUrl: './profesoreslist.component.html',
  styleUrls: ['./profesoreslist.component.css']
})
export class ProfesoreslistComponent implements OnInit {

  listprofesores : any;

  public  datos = {nombres_prof: '' , apellido_prof:''};
  public credential = { id:'',nombres: '',apellidos :'' };

  constructor(private myservicio:MyserviceService) { }

  ngOnInit(): void {
    this.mostrarProfesores();
  }



    // lista de roles desde la base de datos tabla roles//
    mostrarProfesores(){
      this.myservicio.mostarProfesores().subscribe(
       (response)=>{
         if (response) {
         this.listprofesores = response.data;
         } else {
           alert("no Existen datos");
         }
       },
       error=>{
       console.log(JSON.stringify(error));
       }
     )
    }

    datos_profesor(id,nombres,apellidos){
      console.log('el dato ',id);
      this.credential.id        = id ;
      this.credential.nombres   = nombres ;
      this.credential.apellidos = apellidos ;
    }


    updateDatos(id){
      this.myservicio.updateProfesor(id,this.credential).subscribe(response=>{
        this.mostrarProfesores();
      },
      error=>{
        console.log(JSON.stringify(error));
        
      })
    }

  guardar(){
    
    this.myservicio.guardarProfesor(this.datos).subscribe(response=>{
    this.mostrarProfesores();
    this.datos = {nombres_prof: '' , apellido_prof:''};
    },
    error=>{
      console.log(JSON.stringify(error)); 
    })
  }

  borrar(id){
    this.myservicio.deteleProfesor(id).subscribe(response=>{
      this.mostrarProfesores();
    },
    error=>{
      console.log(JSON.stringify(error));
      
    })
  }

}
