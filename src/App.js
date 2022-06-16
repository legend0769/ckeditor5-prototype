import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import xhtml from '../src/mock/test1/xhtml';
// import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

const editorConfiguration = {
  toolbar: 
     [
        'undo', 'redo',
        '|',
        'exportPdf', 'exportWord',
        '|',
        'wproofreader', 'findAndReplace', 'selectAll',
        '|',
        'heading',
        '|',
        'removeFormat', 'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript',
        '|',
        'specialCharacters', 'horizontalLine', 'pageBreak',
        '|',
        '-',
        'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
        '|',
        'link', 'blockQuote', 'insertTable', 'uploadImage', 'mediaEmbed', 'codeBlock', 'htmlEmbed',
        '|',
        'bulletedList', 'numberedList',
        '|',
        'outdent', 'indent', 'alignment',
        '|',
        'sourceEditing'
    ]
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data={xhtml.data}
                    onReady={ editor => {
                      editor.ui.getEditableElement().parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                      );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    onError={ ( error, { willEditorRestart } ) => {
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                />
            </div>
        );
    }
}

export default App;