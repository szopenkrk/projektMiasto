/* Libraries */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ThemeProvider, Theme } from '@material-ui/core';

/* Models */
import { ReduxState } from '../../model/Redux';

/* Application files */
import Config from '../../lib/config';
import LandingPage from '../../pages/LandingPage';
import MaintenancePage from '../../pages/MaintenancePage';
import RegisterPage from '../../pages/RegisterPage';

type Props = {
    store: Store<ReduxState>;
    theme: Theme;
};

export function App (props: Props) {
    return (
        <Provider store={props.store}>
            <ThemeProvider theme={props.theme}>
                <BrowserRouter>
                    <Switch>
                        {!Config.MAINTENANCE_MODE && (<Route path="/" component={LandingPage} exact={true} />)}
                        {Config.MAINTENANCE_MODE && (<Route path="/" component={MaintenancePage} exact={true} />)}
                        <Route component={RegisterPage} exact={true} />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;