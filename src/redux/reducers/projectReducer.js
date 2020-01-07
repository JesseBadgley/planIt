const initState = {
	projects: [
		{ id: '1', title: 'write purchase order', content: 'things I need to do' },
		{
			id: '2',
			title: 'complete billing reports',
			content: 'things I need to do'
		},
		{ id: '3', title: 'organize samples', content: 'things I need to do' }
	]
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT_SUCCESS':
			console.log('create project success');
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error');
			return state;
		default:
			return state;
	}
};

export default projectReducer;
