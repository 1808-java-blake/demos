import * as React from 'react';

/**
 * In this class we really just want to return a list of td, if it is surrounded by a div this could cause problems. 
 */
export class RowData extends React.Component<any, {}> {

  public constructor(props) {
    super(props);
  }

  public render() {
    return (
      <>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.email}</td>
      </>
    )
  }

}


