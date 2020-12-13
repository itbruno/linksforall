import { BrowserRouter, Route } from 'react-router-dom';
import Home from './themes/alpha';

function Routes() {
    return(
        <BrowserRouter>
            <Route exact path="/:userId" component={Home} />
        </BrowserRouter>
    )
}

export default Routes;
