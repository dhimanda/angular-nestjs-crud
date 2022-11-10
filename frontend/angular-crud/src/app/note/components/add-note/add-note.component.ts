import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  value = '';
  priorities: string[] = ['high', 'medium', 'low'];
  noteForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private dialogRef: MatDialogRef<AddNoteComponent>
  ) {}

  //init
  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
    });
    console.log(this.noteForm);
  }

  onFormSubmit() {
    if (this.noteForm === null) return;
    let note: Note = {
      title: this.noteForm.controls['title'].value,
      desc: this.noteForm.controls['desc'].value,
      priority: this.noteForm.controls['priority'].value,
      priorityColor: 'primary',
    };
    this.noteService.addNote(note);
    this.dialogRef.close();
    console.log(
      '🚀 ~ file: add-note.component.ts ~ line 32 ~ AddNoteComponent ~ onFormSubmit ~ this.noteForm',
      this.noteForm
    );
  }
}
