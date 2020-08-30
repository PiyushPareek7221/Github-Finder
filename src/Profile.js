import React, { useState } from 'react';
import './Profile.css';
import User from './User'

function Profile() {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const afterSubmit = async (e) => {
        e.preventDefault();

        const profile = await (await fetch(`https://api.github.com/users/${username}`)).json();
        console.log(profile);

        const repositories = await (await fetch(profile.repos_url)).json();
        // console.log(repositories);

        if(profile){
            setData(profile);
            setRepositories(repositories);
        }

    }

    return (
        <div>
            <div className='search_box'>
                <input type='text' className='search_bar' placeholder='Search user with username...' value={username} onChange={e=>setUsername(e.target.value)} />
                <button type='submit' className='input_button' onClick={afterSubmit}>Search</button>
            </div>
            <User data={data} repositories={repositories}/>
        </div>
    )
}

export default Profile;
