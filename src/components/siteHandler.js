import {useState} from 'react'
import UserRegister from "./login/userRegister";
let userData = []
function SiteHandler()
{
	const [submitted,setSubmitted] = useState(false)
	return(
		<>
			{submitted ? <h1>hello</h1>:<UserRegister submitted={(val)=>{setSubmitted(val)}}/>}
		</>
	);
}
export default SiteHandler