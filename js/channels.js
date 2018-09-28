// Creating channels object

var yummy = {
    name: "#Yummy", 
    createdOn: new Date(2016, 03, 01), 
    createdBy: "minus.plus.yummy", 
    starred: false, 
    expiresIn: 100, 
    messageCount: 999
};


var sevenContinents = {
    name: "#SevenContinents", 
    createdOn: new Date(2016, 03, 01), 
    createdBy: "minus.plus.yummy", 
    starred: true, 
    expiresIn: 100, 
    messageCount: 999
};


var killerApp = {
    name: "#KillerApp", 
    createdOn: new Date(2016, 03, 01), 
    createdBy: "minus.plus.yummy", 
    starred: false, 
    expiresIn: 100, 
    messageCount: 999
};


var firstPersonOnMars = {
    name: "#FirstPersonOnMars", 
    createdOn: new Date(2016, 03, 01), 
    createdBy: "minus.plus.yummy", 
    starred: true, 
    expiresIn: 100, 
    messageCount: 999
};


var octoberFest = {
    name: "#Octoberfest", 
    createdOn: new Date(2016, 03, 01), 
    createdBy: "minus.plus.yummy", 
    starred: false, 
    expiresIn: 100, 
    messageCount: 999
};

function listChannels() {
    $("<li>").appendTo("<ul></ul>");
    createChannelElement(yummy);
    createChannelElement(sevenContinents);
    createChannelElement(killerApp);
    createChannelElement(firstPersonOnMars);
    createChannelElement(octoberFest);
    return new createChannelElement();
}

function createChannelElement(channelObject) {

}
