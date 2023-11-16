import { useState } from "react";
import { Editor, EditorState } from "draft-js";
// import "draft-js/dist/Draft.css";

function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="bg-white p-4">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default MyEditor;
