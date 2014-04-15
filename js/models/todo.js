/**
 * 
 */

Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Write test scripts',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Deploy local cap',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Train local cap',
		isCompleted: false
	}
];