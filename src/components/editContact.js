import React from 'react';
import {useForm} from "react-hook-form";
import { API, graphqlOperation } from 'aws-amplify';
import { updateContacts } from '../graphql/mutations';

const EditContact = ({setIsEditing,id,fetchContacts ,fullname, email, phonenumber,status }) =>{
        
    const { register, handleSubmit } = useForm();
    const onSubmit = async(formdata) => {
        const payload = 
            {
            id:id,
            fullname:formdata.fullname,
            email:formdata.email,
            phonenumber:formdata.phonenumber,
            status:formdata.status
        }

        const {data} = await API.graphql(graphqlOperation(updateContacts,{input:payload}))
        console.log("edited contact",data)

        fetchContacts();
        setIsEditing(false)
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="fullname" type="text" placeholder={fullname} ref={register({ required: true })} />
            <input name="email" type="email" placeholder={email} ref={register({ required:true })} />
            <input name="phonenumber" type="text" placeholder={phonenumber} ref={register({required:true})}></input>
            <div className="select_wrapper">
            <label for="active">Active : </label>
                <div class="select">
                <select name="status">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </div>
            </div>
            <div className="edit_button_container">
                <button type="submit">Submit</button>
                <button onClick={()=>setIsEditing(false)}>Back</button>
            </div>
        </form>
    )
}
export default EditContact