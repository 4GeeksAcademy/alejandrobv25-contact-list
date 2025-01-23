import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>CONTACT LIST</h1>
		<Link to="/addContact" className="btn btn-success">
			añadir contacto
		</Link>
	</div>
);
