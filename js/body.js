/**
 * Created by Mobio Solutions.
 * User: Mobio 
 * Date: 12-Feb-18
 */

// Body component to generate <tbody> for datatable.loads data from "data" varaible

class Body extends React.Component {

   constructor(props) {
        super(props);
        this.state = {'data' : data};
    } 
    
    render() {

      const listItems = this.state.data.body.map((bodyData) =>
          <tr key={bodyData.id}> 
            <td key={bodyData.id}> {bodyData.id} </td>
            <td key={bodyData.name}> {bodyData.name} </td>
            <td key={bodyData.position}> {bodyData.position} </td>
            <td key={bodyData.salary}> {bodyData.salary} </td>
            <td key={bodyData.start_date}> {bodyData.start_date} </td>
            <td key={bodyData.office}> {bodyData.office} </td>
            <td key={bodyData.extn}> {bodyData.extn} </td>
          </tr>
      );

      return (<tbody>{listItems}</tbody>)
           
    } 
}