function trig1(request,res){
    console.log('z trig: ' + JSON.stringify(request.body));
    //console.log('scope: ' + triggerNestLevel);

    //request.body.item.message = request.body.item.message.toUpperCase();
	res.send(200/*{'dupa': 'not in my house!'}, request.body.item*/);
}