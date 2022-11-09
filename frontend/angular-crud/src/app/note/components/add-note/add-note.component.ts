import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  value = '';
  priorities: string[] = ['high', 'medium', 'low'];
  noteForm: FormGroup | null = null;

  constructor(private fb: FormBuilder) {}

  //init
  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
    });
    console.log(this.noteForm);
  }
  onChange(): void {
    console.warn(this.value);
  }
}
