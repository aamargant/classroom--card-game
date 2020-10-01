import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { getCurrentPost } from "www/ducks/blog";

export function BlogPostView() {
  const post = useSelector(getCurrentPost);

  if (!post) return null;

  return (
    <article>
      <h1>{post.title}</h1>
      <div>
        <ReactMarkdown source={post.body} escapeHtml={false} />
      </div>
    </article>
  );
}
