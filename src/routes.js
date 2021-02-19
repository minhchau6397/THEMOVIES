import Home from './pages/home/Home'
import MovieDetail from './pages/home/MovieDetail'
import Article from './pages/home/Article'

import AddData from './pages/admin/AddData'

export const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/movie/detail/:id",
    exact: true,
    component: MovieDetail
  },
  {
    path: "/article/:id",
    exact: true,
    component: Article
  }
];

export const routesAdmin = [
  {
    path: "/admin/input",
    exact: true,
    component: AddData
  }
]