
import "../components/API-data.css"
import { useEffect, useState } from "react"
import axios from "axios"



   /*export function ApiData(){

    const[userData,setuserData]=useState([]);
    const[tableData,settableData]=  useState ({

        first_name: '',
        last_name: '',
        email: ''
    });
    const [editData, setEditData] = useState(null);

    useEffect (()=>{
        fetch ("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(json => setuserData(json.data))
        .then((result)=>{
            console.log("Result: ", result);
            setuserData(result.data);
        })
       .catch((error)=>{
        console.log("Error",error);
       })
       
    },[]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        settableData({
          tableData,
          [name]: value
        });
      };
    
      const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({
          editData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const maxId = userData.length > 0 ? Math.max(...userData.map(item => item.id)) : 0;
        const newUser = {
          id: maxId + 1,
          ...userData
        };
    
        fetch('https://reqres.in/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(response => response.json())
          .then(json => {
            console.log('Response from POST:', json);
            setuserData([...userData, newUser]);
          });
      };
    
      const handleUpdate = (e) => {
        e.preventDefault();
        fetch('https://reqres.in/api/users/2', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(editData)
        })
          .then(response => response.json())
          .then(json => {
            console.log('Response from PUT:', json);
            setuserData(userData.map(user => (user.id === editData.id ? json : user)));
            setEditData(null);
          });
        };
    
    const setEdit = (user) => {
        setEditData(user);
      };

      
    
    const handleDelete = (id) => {
        fetch("https://reqres.in/api/users?page=2", {
          method: 'DELETE'
        })
          .then(() => {
            console.log('Response from DELETE');
            setuserData(userData.filter(user => user.id !== id));
          });
      };

      return(
        
        <div>
     <form onSubmit={handleSubmit}>
        <input
          type="text"name="first_name"placeholder="First Name"value={tableData.first_name} onChange={handleChange}
        />
        <input type="text"name="last_name" placeholder="Last Name"value={tableData.last_name}onChange={handleChange}
        />
        <input
          type="email"name="email"placeholder="Email"value={tableData.email} onChange={handleChange}
        />
        <button className="btn btn-warning m-2" type="submit">Submit</button>
      </form>
      {editData && (
        <form onSubmit={handleUpdate}>
          <input
            type="text" name="first_name"placeholder="First Name"value={editData.first_name} onChange={handleEditChange}
          />
          <input
            type="text"name="last_name"placeholder="Last Name" value={editData.last_name}onChange={handleEditChange}
          />
          <input
            type="email" name="email"placeholder="Email" value={editData.email}onChange={handleEditChange}
          />
          <button className="btn btn-warning m-2" type="submit">Update</button>
        </form>
      )};
           <table >
            <tr className="header">
                <th>ID</th>
                <th>PROFILE PIC</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>E-MAIL</th>
               
            </tr>
            {
                userData && userData.length >0 && userData.map((item) =>{
                    return(
                        <tr className="container">
                             <td>{item.id}</td>
                            <td><img src={item.avatar} alt=""/></td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><button className="btn btn-primary" onClick={() => setEdit(item)}  >Edit</button></td>
                            <td><button className="btn btn-danger"  onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
           </table>
        </div>
    )
}*/




export  function ApiData() {
  const [userData, setUserData] = useState([]);
  const [tableData, setTableData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const maxId = userData.length > 0 ? Math.max(...userData.map((item) => item.id)) : 0;
    const newUser = {
      id: maxId + 1,
      ...tableData
    };

    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((response) => {
        console.log('Response from POST:', response);
        setUserData([...userData, newUser]);
        setTableData({
          first_name: '',
          last_name: '',
          email: ''
        });
      })
      .catch((error) => console.error('Error creating user:', error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://reqres.in/api/users/${editData.id}`, editData)
      .then((response) => {
        console.log('Response from PUT:', response.data);
        setUserData(
          userData.map((user) =>
            user.id === editData.id ? { ...response.data, id: editData.id } : user
          )
        );
        setEditData(null);
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        console.log('Response from DELETE');
        setUserData(userData.filter((user) => user.id !== id));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  const setEdit = (user) => {
    setEditData(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={tableData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={tableData.last_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={tableData.email}
          onChange={handleChange}
        />
        <button className="btn btn-warning m-2" type="submit">
          Submit
        </button>
      </form>
      {editData && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={editData.first_name}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={editData.last_name}
            onChange={handleEditChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editData.email}
            onChange={handleEditChange}
          />
          <button className="btn btn-warning m-2" type="submit">
            Update
          </button>
        </form>
      )}
      <table>
        <thead>
          <tr className="header">
            <th>ID</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.length > 0 &&
            userData.map((item) => (
              <tr className="container" key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.avatar} alt="Avatar" />
                </td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => setEdit(item)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default ApiData;