import React from 'react'
import { useNavigate  } from 'react-router-dom';
import backgroundImage from '../../assets/images/Fondo.jpg';
import { RiArrowLeftLine } from "react-icons/ri";
import EntryControlList from '../../components/entryControlList/EntryControlList';

function EntryControlsPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className=" saturate-150 bg-cover bg-center h-screen w-full">
        <div className="bg-gradient-to-b from-transparent to-black bg-center h-screen w-full flex flex-col gap-3 items-center justify-center">
        <button onClick={handleGoBack} className="absolute top-0 left-0 mt-1 ml-1 md:mt-2 md:ml-2 text-white bg-black opacity-80 rounded p-1 md:p-2 flex items-center justify-center">
        <RiArrowLeftLine className="text-lg md:text-xl"/>
        </button>
            <EntryControlList/>
        </div>
    </div>
  )
}

export default EntryControlsPage