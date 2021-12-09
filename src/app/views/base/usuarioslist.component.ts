import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../../myservice.service';
//import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-usuarioslist',
  templateUrl: './usuarioslist.component.html',
  styleUrls: ['./usuarioslist.component.css']
})
export class UsuarioslistComponent implements OnInit {

  //form: FormGroup;

  listroles       : any;
  listusuarios    : any;
  seleccionado :string;

  selectedOption: string;
  selectedOption1: string;
  selectedOption2: string;

  printedOption: string;
  public datos = { nombre: '' , pass:'',email:''};

  public credential = { id:'',nombre: '',email :'',pass:'' };


  constructor(private myservicio:MyserviceService) {

    // this.form = new FormGroup({
    //   country: new FormControl(null)
    // })
   }

  ngOnInit(): void {
    this.mostrarRoles();
    this.mostrarUsuarios();
  }

  // get country(): string {
  //   return this.form ? this.form.get('country').value : '';
  // }

// lista de roles desde la base de datos tabla roles//
  mostrarRoles(){
    this.myservicio.mostarRoles().subscribe(
     (response)=>{
       if (response) {
       this.listroles = response.data;
       } else {
         alert("no Existen datos");
       }
     },
     error=>{
     console.log(JSON.stringify(error));
     }
   )
  }

// lista de roles desde la base de datos tabla roles//
mostrarUsuarios(){
  this.myservicio.mostarUsuarios().subscribe(
   (response)=>{
     if (response) {
     this.listusuarios = response.data;
     } else {
       alert("no Existen datos");
     }
   },
   error=>{
   console.log(JSON.stringify(error));
   }
 )
}


  //mico($event.target,selecionado)

  guardar(){
    this.printedOption = this.selectedOption1;

   
    
    this.myservicio.guardarRoles(this.datos,this.selectedOption1).subscribe(response=>{
      this.mostrarUsuarios();
      this.datos = { nombre: '' , pass:'',email:''};
      this.selectedOption1 ='';
    },
    error=>{
      console.log(JSON.stringify(error)); 
    })
  }


  datos_user(id,nombre,pass,email){
    console.log('el dato ',id);
    this.credential.id =id ;
    this.credential.nombre =nombre ;
    this.credential.pass =pass ;
    this.credential.email =email ;

    // this.credential.precio =precio ;
    
  }
  
  updateDatos(id){
    this.myservicio.updateUsuario(id,this.credential,this.selectedOption2).subscribe(response=>{
      this.mostrarUsuarios();
    },
    error=>{
      console.log(JSON.stringify(error));
      
    })
  }


  borrar(id){
    this.myservicio.deteleUsuario(id).subscribe(response=>{
      this.mostrarUsuarios();
    },
    error=>{
      console.log(JSON.stringify(error));
      
    })
  }

  onChange($event) {
    console.log(this.selectedOption,'hola');
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.
}

  mico(e,valor) {
    console.log("que trae",e.value);
    console.log(" valor", valor);
    
    console.log("que trae", JSON.stringify(e));
    this.seleccionado =  e;
    console.log(this.seleccionado);
    
  }
}
