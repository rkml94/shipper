import React, { Component } from 'react';
import { Button, Card,Label, FormGroup,CardFooter,CardBody, CardGroup, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
// import { act } from 'react-dom/test-utils';
// import Pagination from "react-js-pagination";
// import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../Components/Pagination";

class DriverManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: [],
           search:'',
           filteredData: [], 
           showPerPage:4,
           setShowPerPage:4,
           pagination:{start:0,end:4},
           setPagination:{start:0,end:4},

        }
     }
    componentDidMount(){
        var API_GET = "https://randomuser.me/api/?results=30"
        this.serverRequest = axios.get(API_GET, {
          mode: "no-cors",
          headers:{
            Accept: 'application/json',
                    'Content-Type': 'application/json',},
          })
        .then(response => {
          console.log('tes driver :', response.data.results);
            if (response && response.data) {
              this.setState({ data: response.data.results, filteredData:response.data.results });
            }
          })
          .catch(error => console.log(error));
      }

      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }

      renderDatas = data => {
          const {search } = this.state;
          var code = data.name.first.toLowerCase();

          /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/ console.log(data)

          return(
            <Col xs="12" sm="6" md="3" key={data.name.first} >
            <Card>
                <CardHeader>
                <i className="fa fa-ellipsis-h float-right"></i>Driver ID <span>{data.id.value}</span>
                </CardHeader>
                <CardBody>
                    <Col>
                        <div>
                        <img src={data.picture.large} style={{borderRadius:'50%'}}/>
                        </div>
                    </Col>
                    <br/>
                    <Col>
                        <div>
                            <Label style={{color:'#b2b3b4'}}>Name Driver</Label><br/>
                            <Label>{data.name.first}, {data.name.last}</Label>
                        </div>
                        <div>
                            <Label style={{color:'#b2b3b4'}}>Telepon</Label><br/>
                            <Label>{data.phone}</Label>
                        </div>
                        <div>
                            <Label style={{color:'#b2b3b4'}}>Email</Label><br/>
                            <Label>{data.email}</Label>
                        </div>
                        <div>
                            <Label style={{color:'#b2b3b4'}}>Tanggal Lahir</Label><br/>
                            <Label>{(data.dob.date).toString().substring(0,10)}</Label>
                        </div>
                    </Col>
                   
                </CardBody>
            </Card>
            </Col> 
          )
      }

      onchanges = e =>{
        const datainti = this.state.data;
        console.log(e.target.value)
        let search = e.target.value;
        console.log(search)
        if(search==="" || search === null){
            this.setState({
                filteredData: datainti
            })
        }else{
            let filteredDatas = datainti.filter(data => {
                return data.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            });
            this.setState({
                filteredData: filteredDatas
            })
        }
        
        // this.setState({ search: e.target.value });
      }

    render() {
    const {datainti, filteredData, pagination, setPagination, showPerPage, setShowPerPage} = this.state;
    console.log(filteredData)
    const onPaginationChange = (start, end) => {
        // setPagination({ start: start, end: end });
      };
    
    return (
        <div className="animated fadeIn">
             <CardHeader style={{backgroundColor:'#ffffff', marginTop:'30px'}}>
                <FormGroup row>
                    <Col md="8" style={{float:'left'}}>
                     <h4 style={{color:'#fe5757'}}>DRIVER MANAGEMENT</h4>
                    <p className='graytext'>
                      Data driver yang bekerja dengan anda
                    </p>
                     </Col>
                     <Col md="2" style={{float:"right"}}>
                     <Input type="text" style={{float:'right', marginTop:'20px'}} placeholder='Cari Driver' onChange={this.onchanges}>
                         <span><i className="fa fa-search"></i></span></Input>
                     </Col>
                     <Col md="2" style={{float:"right"}}>
                     <Button color="danger" style={{float:'right', marginTop:'20px'}}><span>Tambah Driver   </span> <i className="fa fa-plus"></i></Button>
                     </Col>
                     
                 </FormGroup>
                     
             </CardHeader>
             <br/>
             <div className="row">
              {filteredData.slice(pagination.start, pagination.end).map(data => {
                return this.renderDatas(data);
              })}
              
            </div>
            <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={filteredData.length}
        />
          {/* <Row>
            {Cards}
          </Row> */}
     </div>
   );
 }
}

export default DriverManagement;
