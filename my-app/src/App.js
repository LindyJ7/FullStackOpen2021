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
	const [trackedInfo, setTrackedInfo] = React.useState({cubes: 0});

	const buttonOnClick = () =>
	{
		var newObj = {...trackedInfo};

		cardNames.forEach((cardName) =>
			{
				const cardDrawn = "curr" + cardName + "Drawn";
				const cardPlayed = "curr" + cardName + "Played";
				if (trackedInfo[cardDrawn])
				{
					localStorage.setItem(cardName + "Drawn", parseInt(parseInt((localStorage.getItem(cardName + "Drawn") || 0)) + 1));
					//localStorage.setItem("curr" + cardName + "Drawn", false);
					newObj[cardDrawn] = false;
				}
				if (trackedInfo[cardPlayed])
				{
					localStorage.setItem(cardName + "Played", parseInt(parseInt((localStorage.getItem(cardName + "Played") || 0)) + 1));
					//localStorage.setItem("curr" + cardName + "Played", false);
					newObj[cardPlayed] = false;
				}
			}
		);
		localStorage.setItem("Cubes", parseInt((parseInt(localStorage.getItem("Cubes")) || 0) + parseInt(trackedInfo.cubes)));
		localStorage.setItem("Games", (parseInt(localStorage.getItem("Games")) || 0) + 1);
		newObj.cubes = 0;
		setTrackedInfo(newObj);
	};

	return (
		<div className="App">
			<header className="App-header">
				<table>
					<tbody align="center">
						<tr>
							<td>{Card({ name: "Agent13", image: Agent13, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Iceman", image: Iceman, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Angela", image: Angela, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Scorpion", image: Scorpion, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Lizard", image: Lizard, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "GreenGoblin", image: GreenGoblin, data: trackedInfo, setData: setTrackedInfo })}</td>
						</tr>
						<tr>
							<td>{Card({ name: "Storm", image: Storm, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Maximus", image: Maximus, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "ShangChi", image: ShangChi, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "JessicaJones", image: JessicaJones, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Magik", image: Magik, data: trackedInfo, setData: setTrackedInfo })}</td>
							<td>{Card({ name: "Hulk", image: Hulk, data: trackedInfo, setData: setTrackedInfo })}</td>
						</tr>
					</tbody>
				</table>
				<label style={{"fontSize": "24px", "verticalAlign": "center"}}>
					Cubes:&nbsp;&nbsp;
					<input onChange={(e) => setTrackedInfo({...trackedInfo, cubes: e.target.value})} value={trackedInfo.cubes} style={{height: "20px"}} type="number" />
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
				<Checkbox name={params.name + "Drawn"} onChange={params.onChange} label = "Drawn" data={params.data} setData={params.setData} />
				<Checkbox name={params.name + "Played"} onChange={params.onChange} label = "Played" data={params.data} setData={params.setData} />
			</header>
		</div>
	);
}

function Checkbox(params) {
	
	const handleChange = () =>
	{
		const valName = "curr" + params.name;
		var newObj = {...params.data};
		newObj[valName] = typeof(params.data[valName]) === "boolean" ? !params.data[valName] : true;
		console.log(typeof params.data[valName]);
		params.setData(newObj);
		console.log(JSON.stringify(params.data));
	}
  
	return (
		<div className="Checkbox">
			<header className="Checkbox-header">
				<label>
					<div style={{margin: "5px", "backgroundColor": params.data["curr" + params.name] ? "green" : "red", width: "120px",  "borderRadius": "5px"}} >
						{params.label}
						<input onChange={handleChange} name="" type="checkbox" style={{display: "none"}} />
					</div>
				</label>
			</header>
		</div>
	);
}

export default App;
