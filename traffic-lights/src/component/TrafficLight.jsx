import React, { useState } from "react";

 function TrafficLight() {
	const [currentLight, setLight] = useState("yellow");
	return (
		<div class="traffic-light">
			<div class="protector"></div>
            <div class="protector"></div>
            <div class="protector"></div>
			<div className="trafficContainer">
				{currentLight === "red" ? (
					<div className="red light selected" />
				) : (
					<div
						className="red light"
						onClick={() => setLight("red")}
					/>
				)}
				{currentLight === "yellow" ? (
					<div className="yellow light selected" />
				) : (
					<div
						className="yellow light"
						onClick={() => setLight("yellow")}
					/>
				)}
				{currentLight === "green" ? (
					<div className="green light selected" />
				) : (
					<div
						className="green light"
						onClick={() => setLight("green")}
					/>
				)}
			</div>
		</div>

	);
}
export default TrafficLight;
