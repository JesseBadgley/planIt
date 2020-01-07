const initialState = {
	projectsData: [
		{ id: '1', title: 'write purchase order', content: 'things I need to do' },
		{
			id: '2',
			title: 'complete billing reports',
			content: 'things I need to do'
		},
		{ id: '3', title: 'organize samples', content: 'things I need to do' }
	]
};

const projectReducer = (state = initialState, action) => {
	return state;
};

export default projectReducer;
