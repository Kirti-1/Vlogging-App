const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2/'

export const API_URLS = {
    login: () => `${API_ROOT}/users/login`,
    signup: () => `${API_ROOT}/users/signup`,
    posts: (page, limit) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
    createFriendship: (userId) => `${API_ROOT}/friendship/create-friendship?user_id=${userId}`,
    friends: ()=> `${API_ROOT}/friendship/fetch_user_friends`,
    removeFriendship: (userId) => `${API_ROOT}/friendship/remove-friendship?user_id=${userId}`,
    createPost: () => `${API_ROOT}/posts/create`,
    toggleLike: (postId, likeableType) => `${API_ROOT}/likes/toggle?likeable_id=${postId}&likeable_type=${likeableType}`,
    getLikes: (postId, likeableType) => `${API_ROOT}/likes?likeable_id=${postId}&likeable_type=${likeableType}`,
    comment: () => `${API_ROOT}/comments`,
    getComments: (postId) => `${API_ROOT}/comments?post_id=${postId}`,
    deleteComment: (commentId) => `${API_ROOT}/comments?comment_id=${commentId}`,
    editUser: () => `${API_ROOT}/users/edit`,
    userInfo: (userId) => `${API_ROOT}/users/${userId}`,
    searchUsers: (text) => `${API_ROOT}/users/search?text=${text}`

}