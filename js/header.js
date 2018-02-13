/**
 * Created by Mobio Solutions.
 * User: Mobio 
 * Date: 12-Feb-18
 */

// Header component to generate <thead> for datatable

class Header extends React.Component {

   constructor(props) {
        super(props);
        this.state = {'data' : data};
    } 
    
    render() {

      const listItems = this.state.data.header.map((headerText) =>
        <th key={headerText}>{headerText}</th>
      );

      return (
          <thead>
            <tr>
              {listItems}
            </tr>  
          </thead>
        )               
    } 
}