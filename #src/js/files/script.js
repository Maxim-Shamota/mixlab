window.onload = function () {
    document.addEventListener("click", documentActions);

    //Actions (делегирование события click)
    function documentActions(e) {
        const targetElement = e.targetElement;
        
    }

    //Header
    const headerElement = document.querySelector('.header');

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    }

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);

}