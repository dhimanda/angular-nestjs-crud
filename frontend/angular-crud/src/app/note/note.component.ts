import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteComponent } from './components/add-note/add-note.component';

import { Note } from './models/note.model';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  mockNotes: Note[] = [];

  constructor(private dialog: MatDialog, private noteService: NoteService) {}

  ngOnInit(): void {}

  addNote(): void {
    this.dialog.open(AddNoteComponent, {
      width: '300px',
    });
    this.getAllNotes();
  }

  deleteNote(noteIndex: number): void {
    this.noteService.deleteNote(noteIndex);
    this.getAllNotes();
  }

  updateNote(noteIndex: number): void {
    this.dialog.open(AddNoteComponent, {
      width: '300px',
      data: {
        index: noteIndex,
      },
    });
  }

  private getAllNotes(): void {
    this.mockNotes = this.noteService.getAllNotes();
  }
}
