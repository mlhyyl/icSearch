var selection_callbacks = [];

chrome.extension.onRequest.addListener(function (request) {
    var callback = selection_callbacks.shift();
    callback(request);
});

function catalogAuthor(selectedText) {
    // var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=creator,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    var serviceCall = 'https://www.sabanciuniv.edu/bm/en/search-redirect?type=cc&term=a&value=' + selectedText;
    chrome.tabs.create({
        url: serviceCall
    });
    trackAction();
}

function catalogTitle(selectedText) {
    // var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=title,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    var serviceCall = 'https://www.sabanciuniv.edu/bm/en/search-redirect?type=cc&term=t&value=' + selectedText;
    chrome.tabs.create({
        url: serviceCall
    });
}

function catalogSubject(selectedText) {
    // var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=sub,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    var serviceCall = 'https://www.sabanciuniv.edu/bm/en/search-redirect?type=cc&term=k&value=' + selectedText;
    chrome.tabs.create({
        url: serviceCall
    });
}

function catalogAny(selectedText) {
    // var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    var serviceCall = 'https://www.sabanciuniv.edu/bm/en/search-redirect?type=cc&term=af&value=' + selectedText;
    chrome.tabs.create({
        url: serviceCall
    });
}

function journalStarts(selectedText) {
    // var serviceCall = 'https://sfx-90su.hosted.exlibrisgroup.com/sabanci/journalsearch?param_pattern_value=' + selectedText + '&param_textSearchType_value=startsWith';
    var serviceCall = 'https://www.sabanciuniv.edu/bm/en/search-redirect?type=j&term=s&value=' + selectedText;
    chrome.tabs.create({
        url: serviceCall
    });
}

function journalContains(selectedText) {
    // var serviceCall = 'https://sfx-90su.hosted.exlibrisgroup.com/sabanci/journalsearch?param_pattern_value=' + selectedText + '&param_textSearchType_value=contains';
    var serviceCall = 'https://www.sabanciuniv.edu/bm/en/search-redirect?type=j&term=c&value=' + selectedText;
    chrome.tabs.create({
        url: serviceCall
    });
}


chrome.contextMenus.create({
    title: "Catalog search",
    id: "parent",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    title: "Author",
    parentId: "parent",
    contexts: ["selection"],
    onclick: function (info, tab) {
        catalogAuthor(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "Title",
    parentId: "parent",
    contexts: ["selection"],
    onclick: function (info, tab) {
        catalogTitle(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "Subject",
    parentId: "parent",
    contexts: ["selection"],
    onclick: function (info, tab) {
        catalogSubject(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "Any",
    parentId: "parent",
    contexts: ["selection"],
    onclick: function (info, tab) {
        catalogAny(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "Journals",
    id: "journals",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    title: "Starts with \"%s\"",
    parentId: "journals",
    contexts: ["selection"],
    onclick: function (info, tab) {
        journalStarts(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "Contains \"%s\"",
    parentId: "journals",
    contexts: ["selection"],
    onclick: function (info, tab) {
        journalContains(info.selectionText);
    }
});


function trackAction() {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-35605398-1']);
    _gaq.push(['_trackPageview']);
    
    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = 'https://ssl.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
}