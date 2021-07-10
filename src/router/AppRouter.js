import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import PageCapstone from '../projects/capstone/PageCapstone';
import PageMdb from '../projects/movie-buzz/PageMdb';
import PagePortfolio from '../projects/portfolio/PagePortfolio';


function AppRouter() {

  const location = useLocation();

  return (
    <div className="wrapper">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact><PageHome /></Route>
          <Route path='/work'><PageWork /></Route>
          <Route path='/about'><PageAbout /></Route>
          <Route path='/work-farmtoplate'><PageCapstone /></Route>
          <Route path='/work-movie-buzz'><PageMdb /></Route>
          <Route path='/work-portfolio'><PagePortfolio /></Route>
        </Switch>
      </AnimatePresence>
    </div>

  );
}

export default AppRouter;
