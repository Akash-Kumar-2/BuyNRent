import { useState } from "react";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate } from "react-router-dom";

export default function PlacesFormPage(){
    const [title,setTitle] = useState('');
    const [address,setAddress]= useState('');
   
    const [addPhotos,setAddPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,SetPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn]=useState();
    const [checkOut,setCheckOut]=useState();
    const [maxGuest,setMaxGuest]=useState(1);
    const [redirect,setRedirect]=useState(false);

    function inputHeader(text){
        return(
            <h2 className="text-2xl mt-4">{text}</h2>
        );
      }
      function inputDescription(text){
        return(
            <p className="text-gray-500 text-sm">{text}</p>
        );
      }
      function preInput(header,description){
        return (
          <>
          {inputHeader(header)}
          {inputDescription(description)}
          </>
        );
      }
      async function addNewPlaces(ev){
        ev.preventDefault();
      await axios.post('/places',{
        title , address ,addPhotos ,description ,perks,
        extraInfo,checkIn,checkOut,maxGuest
      });
      setRedirect(true);
      }

      if(redirect)
      {
        return <Navigate to={'/account/places'}/>
      } 

    return(
        <div>
            <AccountNav/>
        <form onSubmit={addNewPlaces} >
            {preInput('Title','Title for your place,for advertisement')}
            {/* <h2 className="text-2xl mt-4" >Title</h2>
            <p className="text-sm text-gray-500">Title for your place,for advertisement</p> */}
            <input type="text" value={title} onChange={ev=>setTitle(ev.target.value)} placeholder="title,for example : My lovely Apartment" />
            {preInput('Address','Provide address for this apartment')}
            {/* <h2 className="text-2xl mt-4" >Address</h2>
            <p className="text-sm text-gray-500">Provide address for this apartment</p> */}
            <input type="text" value={address} onChange={ev=>setAddress(ev.target.value)} placeholder="address" />
            {preInput('Photos','more=better')}
            {/* <h2 className="text-2xl mt-4" >Photos</h2>
            <p className="text-sm text-gray-500">more=better</p> */}
          

              <PhotosUploader addedPhotos={addPhotos} onChange={setAddPhotos}/>

            <div>
            {preInput('Description','description of the place')}
            {/* <h2 className="text-2xl mt-4" >Description</h2>
            <p className="text-sm text-gray-500">description of the place</p> */}
             <textarea value={description} onChange={ev=>setDescription(ev.target.description)} />
            </div>
            {preInput('Perks','Select all the perks available')}
            {/* <h2 className="text-2xl mt-4" >Perks</h2>
            <p className="text-sm text-gray-500">Select all the perks available</p> */}
             <Perks selected={perks} onChange={SetPerks}/>
                {preInput('Extra Info','house rules ,etc')}
            
                {/* <h2 className="text-2xl mt-4" >Extra Info</h2>
            <p className="text-sm text-gray-500">house rules ,etc</p> */}
            <textarea value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)} />
            {preInput('Check-In, Check-Out & Max guest','Make sure to cleans the apartment between guest')}
            {/* <h2 className="text-2xl mt-4" >Check-In, Check-Out & Max guest</h2>
            <p className="text-sm text-gray-500">Make sure to cleans the apartment between guest</p> */}
            <div className="grid gap-2 sm:grid-cols-3">
                <div className="mt-2 -mb-1">
                   <h3>Check In Time</h3> 
                 <input type="text" value={checkIn} onChange={ev=>setCheckIn(ev.target.value)} placeholder="14:00"/>
                </div>
                <div className="mt-2 -mb-1">
                <h3>Check Out Time</h3>
                <input type="text" value={checkOut} onChange={ev=>setCheckOut(ev.target.value)} placeholder="10:00"/>
                </div>
                <div className="mt-2 -mb-1">
                <h3>Max Guest Allowed</h3>
                <input type="number" value={maxGuest} onChange={ev=>setMaxGuest(ev.target.value)} placeholder="3"/>
                </div>
            </div>
          <button className="primary my-4">Save</button>
        </form>
     </div>
    )
}