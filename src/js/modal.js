let modalButton = $("[data-toggle=modal]");
let closeModalButton = $(".modal-close__button");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal () {
    let modalOverlay = $(".modal-window");
    modalOverlay.addClass("modal-window--visible");

}

function closeModal () {
    let modalOverlay = $(".modal-window");
    modalOverlay.removeClass("modal-window--visible");

}
