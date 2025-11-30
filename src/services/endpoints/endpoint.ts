export const endpoints = {
  // Auth
  register: () => '/auth/register',
  login: () => '/auth/login',
  logout: () => '/auth/logout',
  refreshToken: () => '/auth/refresh',

  // Users
  users: () => '/users',
  userById: (id: string | number) => `/users/${id}`,

  // Profile
  profile: () => '/auth/profile',

  // Upload Avatar
  uploadAvatar: () => '/upload/avatar',

  // Example resources
  posts: () => '/posts',
  postById: (id: string | number) => `/posts/${id}`,
};
