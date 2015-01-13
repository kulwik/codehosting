function triggerAfter(res,req,modules){
    console.log('Trigger after: ' + JSON.stringify(req.body.key));
    /*
    modules.storageRef.table('todoTable').item(req.body.key).incr('state', 1, function(is){
        console.log('ok: ' + JSON.stringify(is.val()));
        res.send(200);    
    }, function(error){
        console.log('error: ' + error);
        res.send(400, error);
    });
	*/
	res.send(200, {item: {value:12}});
}