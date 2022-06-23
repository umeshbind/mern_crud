import React, { useEffect, useState } from 'react'
const App = () => {
 
  const [record, setRecord] = useState([])
  const [data, setData] = useState({
    username:'',
    email:'',
    password:''
  })

  const {username,email,password} = data;

    const loginHandler =  e => {
    e.preventDefault()
    const newData = {...data,id:new Date().getTime().toString()}
    setRecord([...record,newData])
    setData({username:'',email:'',password:''});
  }

  const handleInput = e => {
     const name= e.target.name;
     const value = e.target.value;
      // console.log(name,value)
     setData({ ...data, [name]: value })

  }
  
  const handleDelete = (id)=>{
      const res = record.filter(elem=> elem.id !== id)
       setRecord(res) 
  }
  

  return (
    <>

      <form onSubmit={loginHandler}>
      
        <div className='container mt-4'>
          <p className='text-center h3'>CRUD Operation Using MERN</p>
          <div className='row'>
            <div className='col-md-12'>
              <label className='form-inline'>Enter Your Name</label>
              <input
                type='text'
                className='form-control'
                value={username}
                name= "username"
                onChange={e => handleInput(e)}
              />
            </div>
            <div className='col-md-12'>
              <label className='form-inline'>Enter Your Email</label>
              <input
                type='text'
                name="email"
                className='form-control'
                value={email}
                onChange={e => handleInput(e)}
              />
            </div>
            <div className='col-md-12'>
              <label className='form-inline'>Enter Your Password</label>
              <input
                type='text'
                name='password'
                className='form-control'
                value={password}
                onChange={e => handleInput(e)}
              />
            </div>
            <div className='col-md-12 mt-4 text-center'>
              <button type='submit' className='btn btn-info'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className='table-responsive text-center'>
        <table className='table mt-4 table-striped table-hover'>
          <thead>
            <tr>
            <th> Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>

          </thead>
          <tbody>


          {// console.log(record)

          record.map(item => (
            <tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <a href={`/update/${item._id}`} className='btn btn-primary mr-2'>Update</a>
                <button className='btn btn-danger'onClick={()=>{if(window.confirm(`Do You Want To Delete`))handleDelete(item.id)}}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
