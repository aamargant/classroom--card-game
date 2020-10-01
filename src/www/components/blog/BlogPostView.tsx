import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { getCurrentPost } from "www/ducks/blog";

export function BlogPostView() {
  const post = useSelector(getCurrentPost);

  if (!post) return null;

  return (
    <article>
      <ReactMarkdown source={post.body} escapeHtml={false} />
    </article>
  );
}
