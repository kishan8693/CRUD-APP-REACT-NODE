import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const [userdata, setUserdata] = useState(null);

  const getdata = async () => {
    try {
      const res = await fetch(`/api/v1/Users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log("Fetched data:", data);

      if (typeof data === 'object') {
        setUserdata(data);
      } else {
        console.error("Expected an object but got:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  },);

  return (
    <>
      <div className="container mt-3">
        <h1 style={{ fontWeight: 400 }}>Hello, I'm {userdata?.name || 'N/A'}</h1>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="row">
              {/* <div className='add_btn'>
                <button className='btn btn-primary mx-2'><EditIcon /></button>
                <button className='btn btn-danger'><DeleteIcon /></button>
              </div> */}
              <div className="left-view col-lg-6 col-md-6 col-12">
                <img src="/profile.png" style={{ height: 50 }} alt="profile_image" />
                <h3 className='mt-3'>Name: <span> {userdata?.name || 'N/A'} </span></h3>
                <h3 className='mt-3'>Age: <span>{userdata?.age || 'N/A'}</span></h3>
                <p className='m-0'><MailOutlineIcon /> Email: <span>{userdata?.email || 'N/A'}</span></p>
              <p><WorkIcon /> Occupation: <span>{userdata?.work || 'N/A'}</span></p>
              </div>
              <div className="right-view col-lg-6 col-md-6 col-12">
                <p className='mt-5'><SmartphoneIcon /> Mobile: {userdata?.mobile || 'N/A'}</p>
                <p><PlaceIcon /> Location: {userdata?.add || 'N/A'}</p>
                <p>Description: <span>{userdata?.desc || 'N/A'}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
