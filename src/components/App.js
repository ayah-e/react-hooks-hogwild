import React, { useState } from "react";
import Nav from "./Nav";
import HogCollection from "./HogCollection"
import HogFilter from "./HogFilter"

import hogs from "../porkers_data";

function App() {
	const [isGreased, setIsGreased] = useState(false);
	const filteredHogArray = hogs.filter((hog) => {return isGreased ? hog.greased : hog})
	console.log(filteredHogArray);

	const [isSorted, setIsSorted] = useState("All");


	const sortedHogArray = [...filteredHogArray].sort(( a, b ) => {
		if (isSorted === "Name" ){
			
			if ( a.name < b.name){
			  return -1;
			}
			if ( a.name > b.name ){
			  return 1;
			}
			return 0;
		} else if (isSorted === "Weight"){
			if ( a.weight < b.weight){
				return -1;
			  }
			  if ( a.weight > b.weight ){
				return 1;
			  }
			  return 0;
		} else {
			return filteredHogArray;
		}
	  })
console.log(sortedHogArray);

	return (
		<div className="App">
			<Nav  />
			<HogFilter setIsGreased = {setIsGreased} setIsSorted = {setIsSorted}/>
			<HogCollection hogs={sortedHogArray} />
			

		</div>
	);
}

export default App;
