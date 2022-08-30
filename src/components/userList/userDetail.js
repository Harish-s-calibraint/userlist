import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetail=()=>{
    const users= useSelector((state)=>state.allUsers.users)
    const {userId} = useParams();
    const{id,name,phone,username,email,address,website,company} = users[userId-1]
    

    return(
        <div>
            {id} <br/>
            {name} <br/>
            {phone}<br/>
            {username}<br/>
            {email}<br/>
            {address.street}<br/>
            {address.suite}<br/>
            {address.city}<br/>
            {company.name}
            {company.catchPhrase}<br/>
            {website}<br/>
        </div>
    );

}
export default UserDetail;