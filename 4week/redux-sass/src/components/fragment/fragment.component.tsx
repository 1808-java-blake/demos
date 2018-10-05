import * as React from 'react';
import { RowData } from './fragment-table-row.compnent';

export class FragmentExample extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = {
      users: [
        {
          email: 'blake.kruppa@revature.com',
          firstName: 'Blake',
          lastName: 'Kruppa',
        },
        {
          email: 'sally.may@revature.com',
          firstName: 'Sally',
          lastName: 'May',
        },
        {
          email: 'john.doe@revature.com',
          firstName: 'John',
          lastName: 'Doe',
        },
      ]
    }
  }

  public render() {
    return (
      <React.Fragment>
        <p>
          In JSX, all elements in a template must be surrounded by a tag. This results in people commonly just surrounding things with a div. Sometimes this is problematic, such as in the scenario that we want jsx to represent a single row of a table. You can use React Fragments to avoid an additional dom node being created where the JSX is going to be injected.
        </p>
        <a href="https://reactjs.org/docs/fragments.html#short-syntax">actual docs </a>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user, index) => (
                <tr key={'user' + index}>
                  <RowData {...user} />
                </tr>
              ))
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }

}


