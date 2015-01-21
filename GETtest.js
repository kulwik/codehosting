function test(res, modules){
    console.log("test " + JSON.stringify(modules.storageRef));
    modules.storageRef.table("todoTable").item({ primary: "resttest", secondary: 1378830551 },
    
    function(itemSnapshot) {
        console.log('success');
        res.send(200, 'cq');
    },
    function(error) {
        console.log('error');
        res.send(400, error);
    });
	//res.send(200);
}