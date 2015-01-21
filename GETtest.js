function test(res, modules){
    modules.storageRef.table("todoTable").getItem({ primary: "resttest", secondary: 1378830551 },
    
    function(itemSnapshot) {
        res.send(200, 'cq');
    },
    function(error) {
        res.send(400, error);
    });
	//res.send(200);
}