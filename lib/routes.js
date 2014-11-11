Router.configure({
    layoutTemplate: 'Layout'
});

Router.route('/', {
    name: 'home'
});

Router.route('/inventory', {
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