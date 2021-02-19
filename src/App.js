import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { routesHome, routesAdmin } from './routes'
import HomeTemplate from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate'
import PageNotFound from './pages/page-not-found';

const showHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const showAdmin = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.component}
        />
      )
    })
  }
}

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          {showHome(routesHome)}
          {showAdmin(routesAdmin)}
          <Route path="/page-not-found" component={PageNotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
