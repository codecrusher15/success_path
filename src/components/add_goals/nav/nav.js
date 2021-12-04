import {Navbar,Container,Nav} from 'react-bootstrap'
function MyNav(props)
{
	console.log(props)
	return(
		<>
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">{props.userData.username}'s Goals</Navbar.Brand>
					<Nav className="me-auto">
					<Nav.Link href="#pricing">Upcoming</Nav.Link>
					<Nav.Link href="#pricing">Completed</Nav.Link>
					<Nav.Link href="#features">Map</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		</>
	);
}
export default MyNav;