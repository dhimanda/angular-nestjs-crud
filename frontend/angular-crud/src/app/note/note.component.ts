import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteComponent } from './components/add-note/add-note.component';

import { Note } from './models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  mockNotes: Note[] = [
    {
      priority: 'high',
      title: 'Title 1',
      desc: 'Desc 1',
      priorityColor: 'warn',
    },
    {
      priority: 'low',
      title: 'Title 2',
      desc: 'Desc 2',
      priorityColor: 'primary',
    },
    {
      priority: 'medium',
      title: 'Title 3',
      desc: 'Desc 3',
      priorityColor: 'accent',
    },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addNote() {
    this.dialog.open(AddNoteComponent, { width: '500px' });
    // this.mockNotes.push({
    //   priority: 'high',
    //   title: 'Title 4',
    //   desc: 'desc 4',
    //   priorityColor: 'accent',
    // });
  }

  deleteNote(noteIndex: number) {
    this.mockNotes = this.mockNotes.filter((_, index) => index != noteIndex);
  }
}
