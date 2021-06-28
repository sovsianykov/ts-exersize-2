import React from 'react'

interface UserInit {
	login : string,
	avatar_url : string
}



const User =  ( props : UserInit ) => {
	return (
		<div>
			<div className="user">
           <div className="pic-holder">
						 <img src={props.avatar_url} alt="user" />
					 </div>
					 <h5>{props.login}</h5>
			</div>
			
		</div>
	)
}

export default User
