import { useState } from "react";
import { createPost } from "../../services/queries";
import "./CreatePostForm.css"

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false)

  return (
    submitted ? <h2>Published!</h2>
      : (
    <form
      className='createPostForm'
      onSubmit={(e) => {
        e.preventDefault(),
          createPost({
            status: "publish",
            title: title,
            content: content,
            excerpt: "hola",
          });
        setSubmitted(true)
      }}
    >
      <input
            placeholder='Title'
            id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      ></input>
      <br />
      <textarea
        id='content'
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      ></textarea>
      <br />
      <input id='submitButton' type='submit'></input>
        </form>
      )
  );
}
