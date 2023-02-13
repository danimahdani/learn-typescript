"use strict";
// data konstan pada ts
var Status;
(function (Status) {
    Status[Status["Loading"] = 1] = "Loading";
    Status[Status["Success"] = 2] = "Success";
    Status[Status["Failed"] = 3] = "Failed";
})(Status || (Status = {}));
console.log(Status);
