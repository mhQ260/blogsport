//zdefiniowanie endpointów do komunikacji z serverem backendowym
export const URI_POSTS = 'posts/';
export const URI_POST_ADD = 'post/add';
export const URI_POST_ID = (id: number) => `post/${id}/`;
export const URI_POST_DELETE_ID = (id: number) => `post/delete/${id}/`;
export const URI_POST_UPDATE = (id: number) => `post/update/${id}/`;
export const URI_COMMENTS_FOR_POST = (id: number) => `comment/${id}/`;
export const URI_COMMENT_ADD = 'comments/';