export interface BlogState {
  blog: {
    list: [{ id: string; title: string }] | null;
    currentPost: {
      id: string;
      title: string;
      body: string;
    } | null;
  };
}
