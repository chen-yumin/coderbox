import { Component, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-file-drop-area',
  templateUrl: './file-drop-area.component.html',
  styleUrls: ['./file-drop-area.component.scss']
})
export class FileDropAreaComponent {

  @Output() onFile = new EventEmitter<any>();
  @HostBinding('class.dragover') dragover: boolean = false;

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragover = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragover = false;
  }

  @HostListener('drop', ['$event']) ondrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.onFile.emit(files)
    }
    this.dragover = false;
  }

}
