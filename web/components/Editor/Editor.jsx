import { Editor as DraftEditor } from "draft-js";
import "draft-js/dist/Draft.css";

export function Editor({ state, onChangeState, ...rest }) {
  return (
    <div className="border-b focus-within:border-black">
      <DraftEditor editorState={state} onChange={onChangeState} {...rest} />
    </div>
  );
}
