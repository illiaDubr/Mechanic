<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";

import someImg from "@img/cover.jpg";

const App = () => (
	<>
		<h1 className="title">В кімнату заходить React</h1>
		<img
			src={someImg}
			alt="Image"
		/>
	</>
);

// Об'єкт для виводу
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
=======
import React from "react";
import ReactDOM from "react-dom/client";

import someImg from "@img/cover.jpg";

const App = () => (
	<>
		<h1 className="title">В кімнату заходить React</h1>
		<img
			src={someImg}
			alt="Image"
		/>
	</>
);

// Об'єкт для виводу
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
>>>>>>> 23f5077db344d033c4b5c6bfc5bfd099b304678e
