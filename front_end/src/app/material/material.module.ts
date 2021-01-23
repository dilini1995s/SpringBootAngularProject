import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatTableModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatOptionModule,
    Material.MatSelectModule
  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatTableModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatOptionModule,
    Material.MatSelectModule
  ]
})
export class MaterialModule { }
