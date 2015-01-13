function triggerAfter(res,req,modules){
    modules.storageRef.table('todoTable').item(req.params.key).incr('state', 1, function(is){
        console.log('ok: ' + JSON.stringify(is));
        res.send(200);    
    }, function(error){
        console.log('error: ' + error);
        res.send(400, error);
    });
	
}