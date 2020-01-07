import React from 'react';

const ProjectSummary = ({ project }) => {
	return (
		<div className='card z-depth-0 project-summary grey lighten-1'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title '>{project.title}</span>
				<p>Posted by the Jesster</p>
				<p className='grey-text'>3rd September, 2am</p>
			</div>
		</div>
	);
};
export default ProjectSummary;
