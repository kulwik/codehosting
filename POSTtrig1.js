function trig1(request,res){
    console.log('z trig: ' + JSON.stringify(request.body));
	res.send(200, request.body.item);
}