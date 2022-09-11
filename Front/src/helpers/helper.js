const blockScroll = (isModalOpen) => {
  isModalOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");
};

module.exports = {
  blockScroll,
};
