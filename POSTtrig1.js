function trig1(request,res){
    console.log('z trig: ' + JSON.stringify(request.body));
    request.body.item.message = request.body.item.message.toUpperCase();
	res.send(400/*, request.body.item*/);
}