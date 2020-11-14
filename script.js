const customPath = document.getElementById("customPath");
const searchTerm = document.getElementById("searchTerm");

document.addEventListener('DOMContentLoaded', () => {
    searchTerm.focus();
    customPath.addEventListener('change', () => {
        var searchPath = customPath.value;
        if (searchPath === "all") {
            var url = "https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains," + document.getElementById('searchTerm').value + "&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&offset=0"
            chrome.tabs.create({
                url
            });
        }
        if (searchPath === "b") {
            var url = "https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains," + document.getElementById('searchTerm').value + "&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&facet=rtype,include,books&offset=0"
            chrome.tabs.create({
                url
            });
        }
        if (searchPath === "a") {
            var url = "https://primo-90su.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains," + document.getElementById('searchTerm').value + "&tab=default_tab&search_scope=Everything&vid=90SU_VIEW&facet=rtype,include,articles&offset=0"
            chrome.tabs.create({
                url
            });
        }
        if (searchPath === "j") {
            var url = "https://sfx-90su.hosted.exlibrisgroup.com/sabanci/journalsearch?param_pattern_value=" + document.getElementById('searchTerm').value + "&param_textSearchType_value=startsWith"
            chrome.tabs.create({
                url
            });
        }
        if (searchPath === "c") {
            var url = "http://risc01.sabanciuniv.edu/search~S9/?searchtype=r&searcharg=" + document.getElementById('searchTerm').value;
            chrome.tabs.create({
                url
            });
        }
        if (searchPath === "f") {
            var url = "http://risc01.sabanciuniv.edu/search~S9/?searchtype=p&searcharg=" + document.getElementById('searchTerm').value;
            chrome.tabs.create({
                url
            });
        }
    });

});