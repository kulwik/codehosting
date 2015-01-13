function triggerAfter(res,req,modules){
    modules.storageRef.table('todoTable').item(req.params.key).incr('state', 1, function(){
        res.send(200);    
    }, function(error){
        res.send(400, error);
    });
	
}