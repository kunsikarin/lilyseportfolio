const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bar'); /*qSelector returns html element*/
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link'); /*qselect selects all element under specified class, returns Nodelist*/
    
    let ismobileNavOpen = false;
    console.log(ismobileNavOpen)
    
    headerBtn.addEventListener('click', () => {
        ismobileNavOpen = !ismobileNavOpen; /*true: Nav is open*/
        if (ismobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
        console.log(ismobileNavOpen);
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            ismobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });


};

export default mobileNav;
