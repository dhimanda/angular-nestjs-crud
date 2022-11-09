import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NoteComponent } from './note.component';
import { MAT_MODULES } from '../material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNoteComponent } from './components/add-note/add-note.component';

const routes: Routes = [{ path: 'note', component: NoteComponent }];

@NgModule({
  declarations: [NoteComponent, AddNoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MAT_MODULES,
    FlexLayoutModule,
  ],
})
export class NoteModule {}
