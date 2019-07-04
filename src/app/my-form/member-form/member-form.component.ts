import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/classes/user';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  public dni:string;
  public nombre:string;
  public user:User;

  @Input() errorDetected = false;
  @Input() recordSaved = false;

  @Output() enviarUsuario = new EventEmitter<User>();

  constructor() {
    this.dni = '';
    this.nombre= '';
    this.errorDetected = false;
    this.recordSaved = false;

  }

  saveRecord(){
    this.user = new User(this.dni, this.nombre);
    this.enviarUsuario.emit(this.user);
    this.dni='';
    this.nombre='';

  }

  clearNotice(){
    this.errorDetected=false;
    this.recordSaved = false;
  }
  ngOnInit() {
  }

}
