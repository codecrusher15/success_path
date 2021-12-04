import 'bootstrap/dist/css/bootstrap.min.css'
import {} from './userRegister.module.css'
import {useRef} from 'react'
import {Form,Button,FloatingLabel} from 'react-bootstrap'
function UserRegister(props)
{
	const username = useRef();
	const finalgoal = useRef();
	const addComments = useRef();
	function handleSubmit(event)
	{
		event.preventDefault();
		const userData = {
			username:username.current.value,
			goal:finalgoal.current.value,
			comments:addComments.current.value,
		}
		console.log(userData)
		props.submitted(true)
	}
	return(
	<Form>
		<Form.Group className="mb-3" controlId="formBasicUserName" >
			<Form.Label>Username:</Form.Label>
		<Form.Control type="username" placeholder="Enter Username" ref={username}/>
		{/*<Form.Text className="text-muted">
		We'll never share your email with anyone else.
	</Form.Text>*/}
		</Form.Group>

		<Form.Group className="mb-3" controlId="formBasicFinalGoal">
			<Form.Label>Final Goal:</Form.Label>
			<Form.Control type="goal" placeholder="Enter your final goal" ref={finalgoal}/>
		</Form.Group>
		{/*<Form.Group className="mb-3" controlId="formBasicCheckbox">
		<Form.Check type="checkbox" label="Check me out" />
</Form.Group>*/}
			<FloatingLabel controlId="floatingTextarea2" label="Comments">
				<Form.Control
				as="textarea"
				placeholder="Leave a comment here"
				style={{ height: '100px' }}
				ref={addComments}
				/>
			</FloatingLabel>
			<br/>
		<Button variant="primary" type="submit" onClick={handleSubmit}>
		Submit
		</Button>
	</Form>
	);
}
export default UserRegister;