function slider(selector, time = -1) {
    let self = {}
    self.selector = selector;
    self.slider = document.querySelector(selector);
    self.allPage = self.slider.querySelectorAll(".page");

    self.width = self.slider.offsetWidth;
    self.height = self.slider.offsetHeight;

    self.maxPage = self.allPage.length;
    self.currentPage = 0;
    self.time = time;
    self.bindSlider;

    self.bind = function(sliderToBind) {
        if (typeof sliderToBind == 'object') {
            self.bindSlider = sliderToBind;
        } else if (self.selector != sliderToBind) {
            self.bindSlider = document.querySelector(sliderToBind);
        }
    }

    self.changePage = function(nextSlide) {
        if (typeof self.bindSlider == 'object') {
            $(self.bindSlider.allPage[self.currentPage]).class("remove", "active--slider");
        }
        $(self.allPage[self.currentPage]).class("remove", "active--slider");

        if (nextSlide == 'l') {
            if (self.currentPage == 0) self.currentPage = self.maxPage - 1;
            else self.currentPage -= 1;
        } else if (nextSlide == 'r') {
            if (self.currentPage == self.maxPage - 1) self.currentPage = 0;
            else self.currentPage += 1;
        } else if (typeof nextSlide == "number" && nextSlide >= 0) {
            self.currentPage += nextSlide % self.allPage.length;
        } else {
            console.log(nextSlide + ' is not defined');
        }

        if (typeof self.bindSlider == 'object') {
            $(self.bindSlider.allPage[self.currentPage]).class("add", "active--slider");
        }

        $(self.allPage[self.currentPage]).class("add", "active--slider");

        return self;
    }

    self.addAuto = function(time, dir = 'r') {
        self.time = time;

        if (self.time > 0) {
            setInterval(() => {
                self.changePage(dir);
            }, self.time);
        }

        return self;
    }

    self.addControle = function(prevText = 'prev', nextTtext = 'next') {
        $(self.slider).append(
            [create("a")
                .add("class", "controle slider--prev")
                .add("href", "#")
                .on('click', function(e) {
                    e.preventDefault();
                    self.changePage('l');

                }).val(prevText).dom
            ]
        ).append(
            [create("a")
                .add("class", "controle slider--next")
                .add("href", "#")
                .on('click', function(e) {
                    e.preventDefault();
                    self.changePage('r');

                }).val(nextTtext).dom
            ]
        );

        return self;
    }

    self.addKey = function(key1, key2) {
        $(window).on('keypress', function(e) {
            if (key1.charCodeAt(0) == e.keyCode) self.changePage('l');
            else if (key2.charCodeAt(0) == e.keyCode) self.changePage('r');
        });

        return self;
    }

    return self;
}

/*
<div class="slider">
        <div class="page active--slider">
            <div class="sliderContainer">
                <span>OK</span>
                <a href="#">test 1</a>
            </div>
        </div>
        <div class="page">
            <div class="sliderContainer">
                <span>GOOD</span>
                <a href="#">test 2</a>
            </div>
        </div>
        <div class="page">
            <div class="sliderContainer">
                <span>SUPER</span>
                <a href="#">test 3</a>
            </div>
        </div>
        <div class="page">
            <div class="sliderContainer">
                <span>NON</span>
                <a href="#">test 4</a>
            </div>
        </div>
        <div class="page">
            <div class="sliderContainer">
                <span>BOF</span>
                <a href="#">test 5</a>
            </div>
        </div>
    </div> 
    
    let testSlider = slider('div.slider').addControle();
let testSlider2 = slider('div.slider--secondary').addControle('<--', '-->').addKey('j', 'k').bind(testSlider);
*/