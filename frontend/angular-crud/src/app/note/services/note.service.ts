import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Injectable, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [];
  constructor() {}
  getAllNotes(): Note[] {
    return this.notes;
  }
  addNote(note: Note): void {
    this.notes.push(note);
  }
  deleteNote(index: number): void {
    this.notes = this.notes.filter((_, noteIndex) => index != noteIndex);
  }
  updateNote(index: number, note: Note): void {}
}
