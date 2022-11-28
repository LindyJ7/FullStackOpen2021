import Agent13 from './Agent13.jpg';
import Iceman from './Iceman.jpg';
import Angela from './Angela.jpg';
import Scorpion from './Scorpion.jpg';
import Lizard from './Lizard.jpg';
import GreenGoblin from './GreenGoblin.jpg';
import Storm from './Storm.jpg';
import Maximus from './Maximus.jpg';
import ShangChi from './ShangChi.jpg';
import JessicaJones from './JessicaJones.jpg';
import Magik from './Magik.jpg';
import Hulk from './Hulk.jpg';
import './App.css';
import * as React from 'react';

function App() {
	const cardNames = ["Agent13", "Iceman", "Angela", "Scorpion", "Lizard", "GreenGoblin", "Storm", "Maximus", "ShangChi", "JessicaJones", "Magik", "Hulk"];
	const [cubes, setCubes] = React.useState(0);

	const buttonOnClick = () =>
	{
		cardNames.forEach((cardName) =>
			{
				if (localStorage.getItem("curr" + cardName + "Drawn"))
				{
					localStorage.setItem(cardName + "Drawn", parseInt(parseInt((localStorage.getItem(cardName + "Drawn") || 0)) + 1));
					localStorage.setItem("curr" + cardName + "Drawn", false);
				}
				if (localStorage.getItem("curr" + cardName + "Played"))
				{
					localStorage.setItem(cardName + "Played", parseInt(parseInt((localStorage.getItem(cardName + "Played") || 0)) + 1));
					localStorage.setItem("curr" + cardName + "Played", false);
				}
			}
		);
		localStorage.setItem("Cubes", parseInt((parseInt(localStorage.getItem("Cubes")) || 0) + parseInt(cubes)));
		localStorage.setItem("Games", (parseInt(localStorage.getItem("Games")) || 0) + 1);
	};

	return (
		<div className="App">
			<header className="App-header">
				<table>
					<tbody align="center">
						<tr>
							<td>{Card({ name: "Agent13", image: Agent13 })}</td>
							<td>{Card({ name: "Iceman", image: Iceman })}</td>
							<td>{Card({ name: "Angela", image: Angela })}</td>
							<td>{Card({ name: "Scorpion", image: Scorpion })}</td>
							<td>{Card({ name: "Lizard", image: Lizard })}</td>
							<td>{Card({ name: "GreenGoblin", image: GreenGoblin })}</td>
						</tr>
						<tr>
							<td>{Card({ name: "Storm", image: Storm })}</td>
							<td>{Card({ name: "Maximus", image: Maximus })}</td>
							<td>{Card({ name: "ShangChi", image: ShangChi })}</td>
							<td>{Card({ name: "JessicaJones", image: JessicaJones })}</td>
							<td>{Card({ name: "Magik", image: Magik })}</td>
							<td>{Card({ name: "Hulk", image: Hulk })}</td>
						</tr>
					</tbody>
				</table>
				<label style={{"fontSize": "24px", "verticalAlign": "center"}}>
					Cubes:&nbsp;&nbsp;
					<input onChange={(e) => setCubes(e.target.value)} value={cubes} style={{height: "20px"}} type="number" />
				</label>
				<button onClick={buttonOnClick} style={{"fontSize": "26px", "borderRadius": "10px", "margin": "15px"}}>Submit</button>
			</header>
		</div>
	);
}

function Card(params) {
	return (
		<div className="Card">
			<header className="Card-header">
				<img src={params.image} className="Card-image" alt="image" height='300' width='300' />
				<Checkbox name={params.name + "Drawn"} onChange={params.onChange} label = "Drawn" checked={params.drawnChecked} />
				<Checkbox name={params.name + "Played"} onChange={params.onChange} label = "Played" checked={params.playedChecked}/>
			</header>
		</div>
	);
}

function Checkbox(params) {

	const [checked, setChecked] = React.useState(false);

	const handleChange = () =>
	{
		setChecked(!checked);
		localStorage.setItem("curr" + params.name, !localStorage.getItem(params.name));
	}
  
	return (
		<div className="Checkbox">
			<header className="Checkbox-header">
				<label>
					<div style={{margin: "5px", "backgroundColor": checked ? "green" : "red", width: "120px",  "borderRadius": "5px"}} >
						{params.label}
						<input onChange={handleChange} name="" type="checkbox" style={{display: "none"}} />
					</div>
				</label>
			</header>
		</div>
	);
}

export default App;
