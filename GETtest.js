function test(res, modules){
    console.log("test");
    modules.storageRef.table("todoTable").item({ primary: "resttest", secondary: 1378830551 },
    
    function(itemSnapshot) {
        res.send(200, 'cq');
    },
    function(error) {
        res.send(400, error);
    });
	//res.send(200);
}