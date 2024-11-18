import { useState } from 'react';

export default function App() {
const [list, setList] = useState([]);
const [input, setInput] = useState('');

function submitValue (e) {
	e.preventDefault();
	setList([...list, input]);
	setInput('');
	console.log(list)
}

	return (
		<div className="App">
			<div className='todo-header'>
				<h1>To do List</h1>
			</div>
			<div className='forms'>
				<form>
				<input
					type="text"
					name="name"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<input type="submit" value="Submit" onClick={submitValue}/>
				</form>
			</div>
			{list.map(item => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
}
