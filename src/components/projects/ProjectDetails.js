import React from 'react';

export const ProjectDetails = (props) => {
	const id = props.match.params.id;
	console.log(props);
	return (
		<div className='container section project-details'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>Project Title - {id}</span>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
						culpa vel animi minus tempora? Tempora quidem reprehenderit labore
						distinctio sapiente rerum deleniti explicabo in, eveniet neque
						voluptatem ex sit similique.
					</p>
				</div>
				<div className='card-action grey-lighten-4 grey-text'>
					<div>Posted by Jesse</div>
					<div>24th of October, 3am</div>
				</div>
			</div>
		</div>
	);
};
