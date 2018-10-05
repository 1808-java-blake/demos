import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Link } from 'react-router-dom';


export class NestedComponent extends React.Component<any, any> {

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Link to="/nested/child1">
              <button className="btn btn-primary">Child 1</button>
            </Link>
            <br />
            <Link to="/nested/child2">
              <button className="btn btn-primary">Child 2</button>
            </Link>
          </div>
          <div className="col-8">
            <Switch >
              <Route path="/nested/child1" component={Child1Component} />
              <Route path="/nested/child2" component={Child2Component} />
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}