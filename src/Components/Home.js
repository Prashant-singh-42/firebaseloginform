import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from './Common/Button'


export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    sessionStorage.removeItem("User");
    navigate("/login");
  };

  const [disabled, setDisabled] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, []);
  let user = sessionStorage.getItem("User")
  return (
    <>
      <div> Welcome <span style={{color: '#ff4f5a'}} > {user} </span></div>
      <Button handleAction={handleLogout} setDisabled={setDisabled} title={'logout'} />
    </>
  );
}
