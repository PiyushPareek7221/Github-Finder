import React from 'react';
import './User.css';
import Logo1 from './logo1.png';

function User({data, repositories}) {
    return (
        <div>
            {!data.name?"":( <h1 className={data? 'username':'not_username'}> Hi {data.name} </h1>)}
            <div className={data? 'user_details':'not_username'}>
                <div className='avatar'>
                    <h2 className='avatar_text'>{data.avatar_url?('Avatar'):''}</h2>
                    {!data.avatar_url?"" :( <img className='user_image' src={data.avatar_url} alt='image' />)}
                </div>
                <div className='bio'>
                    <h2 className='avatar_text'>{data.bio?('Bio'):''}</h2>
                    {!data.bio?"" :(<h3 className='bio_text'>{data.bio}</h3>)}
                </div>
                <div className='repos'>
                    <h2 className='repos_text'>{data.repos_url?('Repositories'):''}</h2>
                    <div>{repositories.map(repo => (
                        <div>
                        <a className='reposlink' href={repo.html_url} target='_blank' ><img className='logo' src={Logo1} />{repo.name}</a></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
