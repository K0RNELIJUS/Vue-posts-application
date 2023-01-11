import PostsPage from '../views/PostsPage.vue';
import SinglePostPage from '../views/SinglePostPage.vue';

let routes = [
  {
    path: '/',
    component: PostsPage
  },
  {
    path: '/:id',
    component: SinglePostPage
  }
];

export default routes;
