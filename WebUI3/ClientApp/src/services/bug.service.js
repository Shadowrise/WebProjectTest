"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var BUGS = [
    {
        bugId: 1,
        description: "bug 1",
        typeId: 1,
        statusId: 1,
        areaId: 1,
        userId: 1,
        dateCreation: new Date()
    }
];
var BugStatusEnum;
(function (BugStatusEnum) {
    BugStatusEnum[BugStatusEnum["New"] = 1] = "New";
    BugStatusEnum[BugStatusEnum["Processing"] = 2] = "Processing";
    BugStatusEnum[BugStatusEnum["Resolved"] = 3] = "Resolved";
    BugStatusEnum[BugStatusEnum["Rejected"] = 4] = "Rejected";
})(BugStatusEnum = exports.BugStatusEnum || (exports.BugStatusEnum = {}));
var BUG_STATUSES = [
    {
        statusId: BugStatusEnum.New,
        name: "New"
    },
    {
        statusId: BugStatusEnum.Processing,
        name: "Processing"
    },
    {
        statusId: BugStatusEnum.Resolved,
        name: "Resolved"
    },
    {
        statusId: BugStatusEnum.Rejected,
        name: "Rejected"
    }
];
var BugService = /** @class */ (function () {
    function BugService() {
    }
    BugService.prototype.getBugs = function () {
        return BUGS;
    };
    BugService.prototype.getBugStatuses = function () {
        return BUG_STATUSES;
    };
    BugService.prototype.addData = function (name) {
        //this.data.push(name);
    };
    return BugService;
}());
exports.BugService = BugService;
//# sourceMappingURL=bug.service.js.map