function trig1(request,res){
    console.log('z trig: ' + JSON.stringify(request.body));
    console.log('scope: ' + JSON.stringify(this));
    //request.body.item.message = request.body.item.message.toUpperCase();
	res.send(400/*{'dupa': 'not in my house!'}, request.body.item*/);
}