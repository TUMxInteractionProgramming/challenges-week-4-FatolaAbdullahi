/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <strong>' + channelName.createdBy + '</strong>';

    /* #6 #liking channels on #click */
        
        $('#channel-star').toggleClass(channelName.starred = true ? '<i class = "fas fa-star"></i>' : '<i class = "far fa-star"></i>') 
        && $('#channel-star').toggleClass(channelName.starred = true ? '<i class = "fas fa-star"></i>' : '<i class = "far fa-star"></i>');
    
   
    
    

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    currentChannel = $('#channels li:contains(' + channelName.name + ')').addClass('selected');
    return currentChannel;
}

/* #determines current channel */ 
var currentChannel = switchChannel(currentChannel);
console.log('tuning', currentChannel);





/* #6 #liking a channel on #click */
function star1(appStar1) {
    if (appStar1 = yummy.starred) {
        $('#yummy-star').toggleClass('far fa-star') && $('#yummy-star').toggleClass('fas fa-star')
        && $('#channel-star').toggleClass('far fa-star') && $('#channel-star').toggleClass('fas fa-star');
    }
}

function star2 (appStar2) {   
    if (appStar2 = sevenContinents.starred) {
        $('#sc-star').toggleClass('far fa-star') && $('#sc-star').toggleClass('fas fa-star')
        && $('#channel-star').toggleClass('far fa-star') && $('#channel-star').toggleClass('fas fa-star');
    }
}

function star3 (appStar3) {   
    if (appStar3 = killerApp.starred) {
        $('#ka-star').toggleClass('far fa-star') && $('#ka-star').toggleClass('fas fa-star')
        && $('#channel-star').toggleClass('far fa-star') && $('#channel-star').toggleClass('fas fa-star');
    }
}

function star4 (appStar4) {   
    if (appStar4 = firstPersonOnMars.starred) {
        $('#fpom-star').toggleClass('far fa-star') && $('#fpom-star').toggleClass('fas fa-star')
        && $('#channel-star').toggleClass('far fa-star') && $('#channel-star').toggleClass('fas fa-star');
    }
}

function star5 (appStar5) {   
    if (appStar5 = octoberFest.starred) {
        $('#octoberfest-star').toggleClass('far fa-star') && $('#octoberfest-star').toggleClass('fas fa-star')
       && $('#channel-star').toggleClass('far fa-star') && $('#channel-star').toggleClass('fas fa-star');
    }
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}


/* #determines current location */
var currentLocation = {
    longitude : 'longitude',
    latitude : 'latitude',
    what3words : 'https://map.what3words.com/moats.fuels.pads'
};
console.log(currentLocation);

/* #New message to be sent on chat bar */
function sendMessage() {
    document.getElementById('#chat-message').value();
    new = Message(messageObject); 
    createMessageElement(new); 
        $.append("#message");
        
}

/* Constructor function for text */
function Message(createdBy, latitude, longitude, createdOn, 
        expiresOn, text, own) {
        currentLocation.what3words = createdBy;
        currentLocation.latitude = latitude;
        currentLocation.longitude = longitude;
        Date.now() = createdOn;
        createdOn.setDate(createdOn.getDate() + 15) = expiresOn;
        text = text;
        true = own;
}

/* #chat message objects and elements */
function createMessageElement(messageObject) {
    $document.getElementById('#message').innerHTML = '<div class="message"><h3><a href="' 
    + createdBy + '" target="_blank"><strong>' + createdBy + '</strong></a>' 
    + createdOn + '<em>' + :expiresIn: + 'min. left</em></h3><p>' 
    + text + '</p><button>+5 min.</button></div>';
}
