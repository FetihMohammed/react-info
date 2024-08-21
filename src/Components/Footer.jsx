import React from "react";


// get current year
const year = new Date().getFullYear();


export default function Footer(props) {
	return (
		<footer>
			<small className={props.darkMode ? "" : "darkText"}>
				<a
					href="https://github.com/FetihMohammed/react-info"
					style={{ textDecoration: "none" }}
				>
				{" "}
				© {year} by{" "}
					Fetih 
				
                    <img className="gitImg"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" />
                {/* git hub icon */}
            
                </a>
			</small>    
		</footer>
	);
}