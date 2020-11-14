var selection_callbacks = [];

chrome.extension.onRequest.addListener(function (request) {
    var callback = selection_callbacks.shift();
    callback(request);
});

function catalogAuthor(selectedText) {
    var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=creator,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    chrome.tabs.create({
        url: serviceCall
    });
}

function catalogTitle(selectedText) {
    var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=title,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    chrome.tabs.create({
        url: serviceCall
    });
}

function catalogKeyword(selectedText) {
    var serviceCall = 'https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=sub,contains,' + selectedText + ',AND&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&mode=simple&offset=0';
    chrome.tabs.create({
        url: serviceCall
    });
}

function journalStarts(selectedText) {
    var serviceCall = 'https://sfx-90su.hosted.exlibrisgroup.com/sabanci/journalsearch?param_pattern_value=' + selectedText + '&param_textSearchType_value=startsWith';
    chrome.tabs.create({
        url: serviceCall
    });
}

function journalContains(selectedText) {
    var serviceCall = 'https://sfx-90su.hosted.exlibrisgroup.com/sabanci/journalsearch?param_pattern_value=' + selectedText + '&param_textSearchType_value=contains';
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
    title: "Keyword",
    parentId: "parent",
    contexts: ["selection"],
    onclick: function (info, tab) {
        catalogKeyword(info.selectionText);
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