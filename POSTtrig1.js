function trig1(request,res, modules){
    console.log('z trig: ' + JSON.stringify(request.body));
    //console.log('scope: ' + triggerNestLevel);
    var item = request.body.item;
    item.message = 'from trig';
    modules.storageRef.table("todoTable").push(item);
    //request.body.item.message = request.body.item.message.toUpperCase();
	res.send(200);
}