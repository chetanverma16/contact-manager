import React from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom'

// GraphQL
import {createContacts} from '../graphql/mutations'
import {API,graphqlOperation} from 'aws-amplify'

const AddContact = ()=>{
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    
    const onSubmit = async(formdata) => {
        const payload = 
            {
            fullname:formdata.fullname,
            email:formdata.email,
            phonenumber:formdata.phonenumber,
            status:formdata.status
        }
        const {data} = await API.graphql(graphqlOperation(createContacts,{input:payload}))
        console.log("successfully added contact",data)
        history.push('/')   
    }

    return(
    <div className="add_container">
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="fullname" type="text" placeholder="fullname" ref={register({ required: true })} />
            <input name="email" type="email" placeholder="email" ref={register({ required:true })} />
            <input name="phonenumber" type="text" placeholder="phonenumber" ref={register({required:true})}></input>
            <div className="select_wrapper">
            <label for="active">Active : </label>
                <div class="select">
                <select name="status">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>

    </div>)
}

export default AddContact