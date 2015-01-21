function test(res, modules){
    
    //console.log("test " + JSON.stringify(modules.storageRef));
    var ir = modules.storageRef.table("todoTable").item({ primary: "resttest", secondary: 1378830551 });
    ir.get(
	function success(itemSnapshot) {
		// Logs the value of the item
		console.log(itemSnapshot.val());
		res.send(200, itemSnapshot.val());
	}, 
	function error(data) { 
		console.error("Error:", data); 
		res.send(400);
	}
);
	//res.send(200);
	
	/*
	tableRef = modules.storageRef.table("todoTable");
tableRef.getItems(
        function(item) {
                if(item) {
                        console.log((new Date().getTime()) - timestamp, "ms");
                        console.log(new Date().getTime(), "Found item: ", item.val());
                }
                else {
                        console.log(new Date().getTime(),"No more items");

                        console.log("Second time ...");

                        timestamp = new Date().getTime()

                         tableRef.getItems(
                function(item) {
                                if(item) {
                                console.log((new Date().getTime()) - timestamp, "ms");
                                        console.log(new Date().getTime(), "Found item: ", item.val());
                        } else {
                                        console.log(new Date().getTime(),"No more items");


                                }

                        },
                function(error) {
                                console.log("Get Items error: ", error);
                }
                );
                }

        },
        function(error) {
                console.log("Get Items error: ", error);
        }
);
	*/
}