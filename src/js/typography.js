let ButtonOne = $(".typo-link--1");
let ButtonTwo = $(".typo-link--2");
ButtonOne.on("click", showLinkOne);
ButtonTwo.on("click", showLinkTwo);
ButtonOne.on("click", buttonToggleOne);
ButtonTwo.on("click", buttonToggleTwo);

function showLinkTwo () {
    let hideLinkFirst = $(".typography-menu--1");
    let showLinkSecond = $(".typography-menu--2");
    hideLinkFirst.addClass("typography-menu--hide");
    showLinkSecond.removeClass("typography-menu--hide");
}

function showLinkOne () {
    let showLinkFirst = $(".typography-menu--1");
    let hideLinkSecond = $(".typography-menu--2");
    showLinkFirst.removeClass("typography-menu--hide");
    hideLinkSecond.addClass("typography-menu--hide");
}

function buttonToggleOne () {
    let showButtonSecond = $(".typo-link--2")
    let hideButtonFirst = $(".typo-link--1")
    showButtonSecond.removeClass("selected");
    hideButtonFirst.addClass("selected");
}

function buttonToggleTwo () {
    let showButtonSecond = $(".typo-link--1")
    let hideButtonFirst = $(".typo-link--2")
    showButtonSecond.removeClass("selected");
    hideButtonFirst.addClass("selected");
}