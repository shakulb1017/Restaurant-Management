import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      employee:[
        {id:101,name:"sonam",age:26,city:'indore',salary:38763},
        {id:102,name:"sourabh",age:26,city:'indore',salary:38763},
        {id:103,name:"ravi",age:26,city:'indore',salary:38763},
        {id:104,name:"goutam",age:26,city:'indore',salary:38763},
        {id:105,name:"ayushi",age:26,city:'indore',salary:38763},
      ]
    }
  }
  add=()=>{
    var ob={
      id:this.idbox.value,
      name:this.namebox.value,
      age:this.agebox.value,
      city:this.citybox.value,
      salary:this.salarybox.value
    }
    this.setState({employee:[...this.state.employee,ob]})
    this.clearbox()
  }
  clearbox=()=>{
    this.idbox.value=''
    this.namebox.value=''
    this.agebox.value=''
    this.citybox.value=''
    this.salarybox.value=''

  }
  delete=(id)=>{
   this.setState({employee:this.state.employee.filter(emp=>emp.id!==id)})
  }
  render() {
     const myStyle ={
       color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
     };
     
    return (
      <div style={myStyle}>
        <h1 align='center'>EMPLOYEE MANAGMENT SYESTEM</h1>
       
         <input ref={c=>this.idbox=c} placeholder='Enter Employee Id'></input>&nbsp;&nbsp;
        <input ref={c=>this.namebox=c} placeholder='Enter Employee Name'></input>&nbsp;&nbsp;
         <input ref={c=>this.agebox=c} placeholder='Enter Employee Age'></input>&nbsp;&nbsp;
         <input ref={c=>this.citybox=c} placeholder='Enter Employee City'></input>&nbsp;&nbsp;
         <input ref={c=>this.salarybox=c} placeholder='Enter Employee Salary'></input>&nbsp;&nbsp;
   
         <button onClick={this.add}>Submit</button>


         <hr></hr>
        <table cellPadding='20'Cellspacing='10' align='center' border={2}>
          <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>NAME</th>
          <th>AGE</th>
          <th>CITY</th>
          <th>SALARY</th>
          <th>OPERATION</th>
          </tr>
          {this.state.employee.map((emp,index)=>{
            return <tr>
              <td>{index+1}</td>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.city}</td>
              <td>{emp.salary}</td>
              <td><button onClick={()=>this.delete(emp.id)}>Delete</button></td>
              
            </tr>

          })}
        </table>
      </div>
    )
  }
}