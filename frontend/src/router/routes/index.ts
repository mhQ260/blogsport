import { RouteName } from '../models';
//zadeklarowanie routes'ów na potrzeby routingu zadeklarowanego w layout'ie content
const routes = [
  {
    path: '/',
    name: RouteName.POSTS,
    component: () => import('../../views/Posts'),
  },
  {
    path: '/post/add',
    name: RouteName.ADD_POST,
    component: () => import('../../views/AddPost'),
  },
  {
    path: '/post/:id',
    name: RouteName.GET_POST,
    component: () => import('../../views/Post'),
  },
];

export default routes;