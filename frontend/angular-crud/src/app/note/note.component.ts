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

  addNote() {
    this.dialog.open(AddNoteComponent);
    this.getAllNotes();
  }

  deleteNote(noteIndex: number) {
    this.noteService.deleteNote(noteIndex);
    this.getAllNotes();
  }

  private getAllNotes(): void {
    this.mockNotes = this.noteService.getAllNotes();
  }
}
