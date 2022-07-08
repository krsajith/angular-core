import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import Quill from "quill";
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { ImageResize } from 'quill-image-resize';
import { QuillEvent } from './quill-event';



@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit, AfterViewInit {

  quill!:Quill;

  @Output() update = new EventEmitter<QuillEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const self = this;

    const BlockEmbed = Quill.import('blots/block/embed')
    class ImageBlot extends BlockEmbed {
      static create(value:any) {
        let node = super.create()
        node.setAttribute('src', value.url)
        node.setAttribute('width', value.width)
        // node.setAttribute('height', value.height)
        return node;
      }

      static value(node:any) {
        return {
          url: node.getAttribute('src'),
          width: node.getAttribute('width'),
          // height: node.getAttribute('height')
        };
      }
    }

    ImageBlot['blotName'] = 'customImage';
    ImageBlot['tagName'] = 'img';
    Quill.register(ImageBlot);


    var toolbarOptions = [
      ['bold', 'italic',],        // toggled buttons 'strike'  'underline'
      // ['blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
      // ['link', 'image', 'clean'],
      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],


      // [{ 'font': [] }],
      // [{ 'align': [] }],

      ['omega']                                         // remove formatting button
      // ['omega'],

    ];

    Quill.register('modules/imageResize', ImageResize);
    this.quill = new Quill('#editor', {
      modules: {
        placeholder: 'Compose an epic...',
        toolbar: toolbarOptions,
        imageResize: {
          // See optional "config" below
        }
      },
      scrollingContainer: "#editorcontainer",
      theme: 'snow',

    });


    // var customButton = document.querySelector('.ql-omega');
    // customButton.addEventListener('click', function () {
    //   console.log('Test', deltaToMarkdown(self.quill.getContents()));


      var cfg = {};

      var converter = new QuillDeltaToHtmlConverter(self.quill.getContents().ops, cfg);

      var html = converter.convert();

      console.log(html);
      self.update.emit(new QuillEvent(btoa(JSON.stringify(self.quill.getContents())),
        btoa(html)));

    // });

  }

  // showContent(q:string, t:string) {
  //   console.log('Test', this.quill.getContents());
  // }

  // insertImage = (image, callback) => {
  //   console.log(image, callback);
  // }

  // insertImage(url:string) {
  //   var range = this.quill.getSelection();
  //   // this.quill.insertEmbed(range.index, 'customImage', img, Quill.sources.USER);
  //   this.quill.insertEmbed(range, 'customImage', {
  //     url,
  //     width: '100px',
  //   })
  // }



