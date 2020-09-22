import { Component, OnInit } from '@angular/core';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import MathType from '@wiris/mathtype-ckeditor5';
import * as ClassicEditor from './../assets/js/ckeditor.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public Editor;

  constructor() {}

  ngOnInit() {
    ClassicEditor.create(document.querySelector('.editor'), {
      toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          'imageUpload',
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          'undo',
          'redo',
          'mathType',
          'subScript',
		  'superScript'
        ],
      },
      language: 'en',
      image: {
        toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
      },
      table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
      },
      licenseKey: '',
    })
      .then((editor) => {
		// window.editor = editor;
      console.log(editor);
    })  
      .catch((error) => {
        console.error('Oops, something went wrong!');
        console.error(
          'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:'
        );
        console.warn('Build id: igunavh4p9wk-8o65j7c6blw0');
        console.error(error);
      });
  }
}
