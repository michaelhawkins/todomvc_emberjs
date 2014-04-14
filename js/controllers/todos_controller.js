/**
 * Created by mike on 4/13/14.
 */

Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function(){
            //Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            //create the new Todo model
            var todo = this.store.createRecord('todo', {
               title: title,
                isCompleted: false
            });

           //Clear the "New Todo" text field
            this.set('newTitle', '');

            todo.save();
        }
    }
});