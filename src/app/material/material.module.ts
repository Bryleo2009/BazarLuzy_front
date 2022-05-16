import { ConfiExitComponent } from '../../app/pages/user/admin/nav/confi-exit/confi-exit.component'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorImpl } from '../_shared/mat-paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  exports:[
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers:[
    {provide: MatPaginatorIntl, useClass: MatPaginatorImpl}
  ]
})
export class MaterialModule { }
