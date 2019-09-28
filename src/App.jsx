import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { ModalProvider, mapStateToProps } from 'joy-ui';
import { Employee } from './Module/Employee';
import './App.scss';


const ModalProviderWithRouter = connect(mapStateToProps,null)(withRouter(ModalProvider));
class App extends React.Component {
    render() {
        return (
            <div className="col col-12 col-lg-12 d-flex flex-column h-100">
                <Provider store={this.props.store}>
                    <BrowserRouter>
                        <ModalProviderWithRouter>
                            <Switch>
                                <Route path="/" component={Employee}></Route>
                            </Switch>
                        </ModalProviderWithRouter>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default App;