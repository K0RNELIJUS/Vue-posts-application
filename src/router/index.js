import PostsPage from '../views/PostsPage.vue';
import SinglePostPage from '../views/SinglePostPage.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    name: 'posts-page',
    path: '/',
    component: PostsPage
  },
  {
    name: 'single-post-page',
    path: '/article/:id',
    component: SinglePostPage
  },

  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
  {
    name: 'error',
    path: '/error',
    component: NotFound
  }
];

export default routes;
