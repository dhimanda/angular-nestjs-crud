import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

interface DialogData {
  index: number;
}
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  isEditingMode = false;
  index = -1;
  priorities: string[] = ['high', 'medium', 'low'];
  noteForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private dialogRef: MatDialogRef<AddNoteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData | null
  ) {}

  //init
  ngOnInit(): void {
    if (this.data !== null) {
      this.isEditingMode = true;
      this.index = this.data.index;
      const note: Note = this.noteService.getNote(this.data.index);
      this.buildForm(note);
      return;
    }
    this.buildForm(null);
  }

  private buildForm(note: Note | null): void {
    this.noteForm = this.fb.group({
      title: new FormControl(note ? note.title : '', [Validators.required]),
      desc: new FormControl(note ? note.desc : '', [Validators.required]),
      priority: new FormControl(note ? note.priority : '', [
        Validators.required,
      ]),
    });
  }
  private getPriorityColor(priority: string): string {
    if (priority === 'high') {
      return 'warn';
    } else if (priority === 'medium') {
      return 'accent';
    } else {
      return 'primary';
    }
  }
  onFormSubmit() {
    if (this.noteForm === null) return;
    let note: Note = {
      title: this.noteForm.controls['title'].value,
      desc: this.noteForm.controls['desc'].value,
      priority: this.noteForm.controls['priority'].value,
      priorityColor: this.getPriorityColor(
        this.noteForm.controls['priority'].value
      ),
    };
    if (this.isEditingMode) {
      this.noteService.updateNote(this.index, note);
    } else {
      this.noteService.addNote(note);
    }

    this.dialogRef.close();
    console.log(
      '🚀 ~ file: add-note.component.ts ~ line 32 ~ AddNoteComponent ~ onFormSubmit ~ this.noteForm',
      this.noteForm
    );
  }
}
