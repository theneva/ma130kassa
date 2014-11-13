/*
Router.configure({

});
*/


Router.configure({
    loadingTemplate: 'loading',
    waitOn: function () {
        return [
            Meteor.subscribe('sales'),
            Meteor.subscribe('categories')
        ];
    }
});

Router.route('/', {
    layoutTemplate: 'Layout',
    name: 'home'
});

Router.route('/inventory', {
    layoutTemplate: 'Layout',
    name: 'inventory'
});

Router.route('/analytics', {
    name: 'dashboard'
});

// Satisfaction
Router.route('/satisfaction/:level', {
    name: 'satisfaction',
    data: function () {
        var level = this.params.level;

        /*var now = new Date();

        var dateNow = now.toISOString().substring(0, 10);*/

        Satisfaction.insert({level: level, date: new Date().toISOString()});

        console.log(level);
    }
});