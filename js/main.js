document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // show sub menu
    var dropdownSubMenu = document.querySelectorAll(".js__dropDown");
    var subMenu = document.querySelector(".js__clickShowMenuMb");

    // search mb
    var searchMbs = document.querySelectorAll(".js__searchMb");

    // slice
    var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");
    var fiveSlides = document.querySelectorAll(".js__swiperFiveItemsContainer");

    // change tab
    var changeTabs = document.querySelectorAll(".js__changeTabs");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            if (backTop) {
                backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }

            // change tabs
            if (changeTabs) {
                changeTabs.forEach((changeTab) => {
                    console.log(changeTab);
                    var tabs = changeTab.querySelectorAll(".js__tab");
                    var panes = changeTab.querySelectorAll(".js__pane");

                    tabs.forEach((tab, index) => {
                        var pane = panes[index];

                        tab.onclick = function () {
                            changeTab
                                .querySelector(".tab-item.active")
                                .classList.remove("active");
                            changeTab
                                .querySelector(".pane-item.active")
                                .classList.remove("active");

                            this.classList.add("active");
                            pane.classList.add("active");
                        };
                    });
                });
            }

            // show sub menu
            if (subMenu) {
                var closeSubMenu = document.querySelector(".js__closeSubMenu");
                var overlay = document.querySelector(".js__overlay");
                var parentBox = subMenu.parentElement;

                subMenu.onclick = function () {
                    this.parentElement.classList.add("active");
                    document.querySelector("body").classList.add("hidden");
                };
                closeSubMenu.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").classList.remove("hidden");
                };
                overlay.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").classList.remove("hidden");
                };
            }

            // dropdown sub menu
            dropdownSubMenu &&
                dropdownSubMenu.forEach((item) => {
                    var parent = item.parentElement;
                    var nextEle = parent.querySelector(".js__listSubMenu");
                    item.onclick = function () {
                        parent.classList.toggle("active");
                        if (nextEle.style.maxHeight) {
                            nextEle.style.maxHeight = null;
                        } else {
                            nextEle.style.maxHeight =
                                nextEle.scrollHeight + "px";
                        }
                    };
                });

            // search mb
            if (searchMbs) {
                searchMbs.forEach((searchMb) => {
                    var closeSearchMb =
                        document.querySelector(".js__closeSearchMb");
                    var formSearchMb =
                        document.querySelector(".js__formSearchMb");
                    searchMb.onclick = function () {
                        formSearchMb.classList.add("active");
                    };
                    closeSearchMb.onclick = function () {
                        formSearchMb.classList.remove("active");
                    };
                });
            }
        },
        // slider one item
        sliderOneItems: function () {
            oneSlides.forEach((item) => {
                var pagi = item.querySelector(".swiper-pagination");
                var slider = item.querySelector(".js__swiperItems");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    effect: "fade",
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                });
            });
        },
        // slider five item
        sliderFiveItems: function () {
            fiveSlides.forEach((item) => {
                var pagi = item.querySelector(".swiper-pagination");
                var slider = item.querySelector(".js__swiperItems");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");

                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 2,
                        },
                        1200: {
                            slidesPerView: 5,
                            slidesPerGroup: 4,
                        },
                    },
                });
            });
        },
        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },
        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // slider one item
            this.sliderOneItems();
            // slider five item
            this.sliderFiveItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
