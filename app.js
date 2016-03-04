var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/mongo_todo');
mongoose.model(
    'New_Task',
    new Schema({
            "task": String,
            "complete": Boolean
        },
        {
            collection: 'tasks'
        }
    ));

var New_Task = mongoose.model('New_Task');

app.post('/task', function(req, res) {
    console.log(req.body);
    var newTask = new New_Task({
        "task": req.body.task,
        "complete": req.body.complete
    });

    newTask.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        New_Task.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });
});

app.get('/task', function(req, res) {
    console.log('here');
    //New_Task.find({"complete": req.body.complete}, function(err, data) {
    New_Task.find({"complete": false}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
        console.log(data);
    });
});

app.put('/task', function(req, res){
    //console.log(req.body);
    var editPost = {
        "complete": req.body.complete
    };

    New_Task.findByIdAndUpdate(

        {_id: req.body._id},

        {
            $set: {
                complete: editPost.complete
            }
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        }
    );

});

app.get('/task_comp', function(req, res) {
    console.log('here');
    //New_Task.find({"complete": req.body.complete}, function(err, data) {
    New_Task.find({"complete": true}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
        console.log(data);
    });
});

app.delete('/task/:id', function(req, res) {
    New_Task.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});