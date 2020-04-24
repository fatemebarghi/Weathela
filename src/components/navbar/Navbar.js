import React, { useContext } from 'react';
import {PageContext} from '../../store/PageContext';

import "./navbar.scss";

function Navbar() {

	const {page, setPage} = useContext(PageContext);

	const handleClick = (pageNumber) => {
		setPage({number: pageNumber});
	}

    return(
			<ul className="navbar" >
            	<li className={page.number!== 3 ? "" : "active"} onClick={() => handleClick(3)}>
					<span className="icon-search icon"></span> 	
            	</li>
            	<li className={page.number!== 0 ? "" : "active"} onClick={() => handleClick(0)}>
					<span className="icon-home icon"></span>
            	</li>
            	<li className={page.number!== 1 ? "" : "active"} onClick={() => handleClick(1)}>
					<span className="icon-star icon"></span>
            	</li>
            	{/* <li className="setting icon" onClick={() => handleClick(2)}>
					<span className="icon-settings"></span>
            	</li> */}
        	</ul>
    )
}

export default Navbar;