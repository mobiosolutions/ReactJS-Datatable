/**
 * Created by Mobio Solutions.
 * User: Mobio 
 * Date: 12-Feb-18
 */

// Datatable component to generate datatable

class Datatable extends React.Component {

     constructor(props) {
          super(props);
          this.state = {'data' : data};
      } 

      componentDidMount() {
        $('#'+this.state.data.id).DataTable(this.state.data.options);
      }

      render() {
          return (
            <table id={this.state.data.id} className="display" cellSpacing="0" width="100%">
               <Header />
               <Body />
            </table>
          ) 
      }
}

ReactDOM.render(
  <Datatable />,
  document.getElementById('dataTableContainer')
);