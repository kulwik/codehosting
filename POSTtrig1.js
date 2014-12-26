function trig1(request,res){
    console.log('z trig: ' + JSON.stringify(request.body));
	res.send(request.body.item);
}