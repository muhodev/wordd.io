import { useState } from "react";
import { EditorState } from "draft-js";

import { Editor, Label } from "components";

export function New(props) {
  const [term, setTerm] = useState(() => EditorState.createEmpty());

  const [description, setDesription] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <div className="container">
        <div className="">
          <Label>Tanım</Label>
          <Editor
            state={term}
            onChangeState={setTerm}
            placeholder="Bir tanım giriniz"
          />
        </div>
        <div className="mt-2">
          <Label>Açıklama</Label>
          <Editor
            state={description}
            onChangeState={setDesription}
            placeholder="Tanımın açıklamasını giriniz"
          />
        </div>
      </div>
    </div>
  );
}
