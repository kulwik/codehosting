function trig1(request,res){
    console.log('z trig: ' + JSON.stringify(request.body));
    //console.log('scope: ' + triggerNestLevel);
    for (var key in this) {
      if (this.hasOwnProperty(key)) {
        console.log(key + " -> " + this[key]);
      }
    }
    //request.body.item.message = request.body.item.message.toUpperCase();
	res.send(400/*{'dupa': 'not in my house!'}, request.body.item*/);
}