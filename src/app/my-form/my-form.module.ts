import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberFormComponent } from './member-form/member-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MemberFormComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MemberFormComponent]
})
export class MyFormModule { }
