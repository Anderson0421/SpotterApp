"use client"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic";


const editorConfiguration = {
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',

    ],
};

function CustomEditor(props) {
    return (
        <div className="bg-black list-disc text-black" id="snippet-classic-editor"
        >
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log(data)
                }}
            />
        </div>
    )
}

export default CustomEditor;
