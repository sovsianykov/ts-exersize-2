

 const api = async () => {
	const  users = await fetch('https://api.github.com/users').then((response) => 
		response.json()
	)
		                                                   ;
		console.log(users)
		return users;

}

export default api;