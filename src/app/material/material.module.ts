import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule
];
@NgModule({
  
  imports: [MaterialComponents  ],

 exports :[MaterialComponents]

})
export class MaterialModule { }
