import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import PageSingle from '../pages/PageSingle';
import Page404 from '../pages/Page404';


function AppRouter() {

  const location = useLocation();
  
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact><PageHome /></Route>
          <Route path='/work/:id'><PageSingle /></Route>
          <Route path='/work'><PageWork /></Route>
          <Route path='/about'><PageAbout /></Route>
          <Route path='*'><Page404/></Route>
        </Switch>
      </AnimatePresence>
    </>

  );
}

export default AppRouter;
