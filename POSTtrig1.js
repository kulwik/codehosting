function trig1(request,res, modules){
    console.log('Trigger data: ' + JSON.stringify(request.body));
    //console.log('scope: ' + triggerNestLevel);
    var item = request.body.item;
    item.message = item.message + 'x';
    
    res.send(400);
    //res.send(200, {item: item});
    
    /*
    setInterval(function(){
        c++;
        console.log(' :: ' + c);
    }, 50);*/

    //res.send(200, {item:item});
    /*
    modules.storageRef.table("todoTable").push(
        item,
        function (itemSnapshot){
            console.log('item push success: ' + JSON.stringify(itemSnapshot.val()));
            res.send(200);
        },
        function (error){
            console.log('error: ' + error);
            res.send(400);
        }
    );
    */
    //request.body.item.message = request.body.item.message.toUpperCase();
	
}