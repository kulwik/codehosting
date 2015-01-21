function Hello(res, modules){
    var items = [];
    modules.storageRef.table("todoTable").getItems(function(itemSnapshot) {
            if (itemSnapshot) {
                items.push(itemSnapshot.val());
            } else {
                res.send(200, items);
            }
        },
        function(error) {
            res.send(400, error);
        }
    );
}
