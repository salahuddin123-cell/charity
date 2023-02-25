import React, { useState,useEffect,useMemo ,useContext} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Layout1 from './layout/Layout1';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

  
  const columns = [
   
    { field: 'FullName', headerName: 'FullName', width: 150 },
    { field: 'Email', headerName: 'Email', width: 150 },
    { field: 'Age', headerName: 'Age', width: 150 },
    { field: 'MobileNumber', headerName: 'MobileNumber', width: 150 },
    { field: 'WhatsappNumber', headerName: 'WhatsappNumber', width: 150 },
    { field: 'Sex', headerName: 'Sex', width: 150 },
    { field: 'Married', headerName: 'Married', width: 150 },
    { field: 'VoterId', headerName: 'VoterId', width: 150 },
    { field: 'PresentAddress', headerName: 'PresentAddress', width: 150 },
    { field: 'PermanentAddress', headerName: 'PermanentAddress', width: 150 },
    { field: 'ActiveVolunteer', headerName: 'ActiveVolunteer', width: 150 },
    { field: 'Category', headerName: 'Category', width: 150 },
    { field: 'Course', headerName: 'Course', width: 150 },
    { field: 'stipendget', headerName: 'stipendget', width: 150 },
    { field: 'Highestqualification', headerName: 'Highest Qualification', width: 150 },
    { field: 'Designation', headerName: 'Designation/Occupation', width: 150 },
    { field: 'Employmentdetails', headerName: 'Employment details', width: 150 },
    { field: 'Businessdetails', headerName: 'Business details', width: 150 },
    { field: 'Occupationdetails', headerName: 'Occupation details', width: 150 },
    { field: 'Membershipscheme', headerName: 'Membershipscheme', width: 150 },
    { field: 'iammuslim', headerName: 'iammuslim', width: 150 ,renderCell: (props) => {
        
        return (
          <>
        <p>Yes</p>
          </>
        );
      }},
    { field: 'careofummah', headerName: 'careofummah', width: 150 , renderCell: (props) => {
        
        return (
          <>
        <p>Yes</p>
          </>
        );
      }

    },
    { field: 'obeyrules', headerName: 'obeyrules', width: 150 ,
    renderCell: (props) => {
        
        return (
          <>
        <p>Yes</p>
          </>
        );
      }
},
    { field: 'noobjection', headerName: 'noobjection', width: 150 ,renderCell: (props) => {
        
        return (
          <>
        <p>Yes</p>
          </>
        );
      }},

  ];

const Members = () => {
    const [data,setdata]=useState([]);
const navigate=useNavigate();
const user=useContext(UserContext);
    let token=useMemo(() => localStorage.getItem('token'), [user.loggedin])

    useEffect(() => {
   
        if(!token){
          navigate('/')
        }
        }, [token])

    useEffect(() => {
        const fetchdata=async()=>{
            await axios
            .get("https://charity-cnyj.onrender.com/members")
            .then((res) => {
              if (res.status === 200) {
                setdata(res.data)
      
              } 
              else Promise.reject();
            })
            .catch((err) => console.log(err));
          //     setFormValues('')
        }
        fetchdata()
     
    }, [])
    

  return (
    <Layout1>
    <div style={{background:"white",minHeight:"100vh",display:"flex",justifyContent:"center" }}>
      
<div style={{ height: '60vh',marginTop:"20px", width: '80%',overflowX:'scroll' }}>
      <DataGrid rows={data} columns={columns}  getRowId={(row) => row._id} />
</div>
  </div>
  </Layout1>
  )
}

export default Members