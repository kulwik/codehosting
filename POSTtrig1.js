function trig1(request,res, modules){
    console.log('z trig: ' + JSON.stringify(request.body));
    //console.log('scope: ' + triggerNestLevel);
    var item = request.body.item;
    item.message = item.message + '*';
    modules.storageRef.table("todoTable").push(
        item,
        function (itemSnapshot){
            console.log('item push success: ' + JSON.stringify(itemSnapshot.val()));
        },
        function (error){
            console.log('error: ' + error);
        }
    );
    //request.body.item.message = request.body.item.message.toUpperCase();
	res.send(200);
}