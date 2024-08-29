
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterOptions = button.closest('.CategoryElement').querySelector('.filter-options');
            const isVisible = getComputedStyle(filterOptions).display === 'block';
            filterOptions.style.display = isVisible ? 'none' : 'block';
            button.querySelector('i').classList.toggle('fa-plus', isVisible);
            button.querySelector('i').classList.toggle('fa-minus', !isVisible);
        });
    });
});

document.querySelector('.mobilMenüTuş').addEventListener('click', function () {
    const menu = document.querySelector('.mobileMenu');
    const buttonIcon = document.querySelector('.mobilMenüTuş i');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        buttonIcon.classList.remove('fa-x');
        buttonIcon.classList.add('fa-bars');
    } else {
        menu.classList.add('open');
        menu.style.display = 'block';
        buttonIcon.classList.remove('fa-bars');
        buttonIcon.classList.add('fa-x');
    }
});

window.addEventListener('resize', function () {
    const menu = document.querySelector('.mobileMenu');
    const button = document.querySelector('.mobilMenüTuş');

    if (window.getComputedStyle(button).display === 'none') {
        menu.classList.remove('open');
        menu.style.display = 'none';
    }
});

document.querySelector('.tuşfiltre').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.mobile-filter-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.list-style-row').addEventListener('click', function () {
    switchToListView();
});

document.querySelector('.list-style-grid').addEventListener('click', function () {
    switchToGridView();
});

function switchToListView() {
    const productArea = document.querySelectorAll('.ProductsTable');
    const productSeries = document.querySelectorAll('.productSeries');

    productArea.forEach(area => {
        area.style.gridTemplateColumns = 'repeat(1, 1fr)';
        area.style.width = '90%';
    });
    productSeries.forEach(series => {
        series.style.width = '100%';
    });
    document.querySelectorAll('.productCard').forEach(card => {
        card.style.display = 'flex';
        card.style.width = '100%';
    });

    document.querySelectorAll('.productBox').forEach(box => {
        box.style.display = 'flex';
        box.style.width = '100%';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'space-between';
    });
    document.querySelectorAll('.productOptions').forEach(box => {
        box.style.display = 'grid';
        box.style.width = '100%';
        box.style.rowGap = '10px';
    });
    document.querySelectorAll('.product-box-img').forEach(img => {
        img.style.width = '250px';
    });
}

function switchToGridView() {
    const productArea = document.querySelectorAll('.ProductsTable');
    const productSeries = document.querySelectorAll('.productSeries');

    productArea.forEach(area => {
        area.style.gridTemplateColumns = 'repeat(3, 1fr)';

    });
    productSeries.forEach(series => {
        series.style.width = '';
    });
    document.querySelectorAll('.productCard').forEach(card => {
        card.style.display = '';
        card.style.width = '';
    });

    document.querySelectorAll('.productBox').forEach(box => {
        box.style.display = '';
        box.style.width = '';
        box.style.alignItems = '';
        box.style.justifyContent = '';
    });
    document.querySelectorAll('.productOptions').forEach(box => {
        box.style.display = '';
        box.style.width = '';
        box.style.rowGap = '';
    });
    document.querySelectorAll('.product-box-img').forEach(img => {
        img.style.width = '';
    });
}

document.querySelector('.search-window-bytc').addEventListener('click', function () {
    console.log('click');
    const searchWindow = document.querySelector('.search-bar-window');
    searchWindow.style.display = 'block';

});
document.querySelector('.search-cancel-btn').addEventListener('click', function () {
    console.log('click');
    const searchWindowClose = document.querySelector('.search-bar-window');
    searchWindowClose.style.display = 'none';
});



document.querySelector('.nav-list-element').addEventListener('mouseenter', function () {
    const underMenu = document.querySelector('.nav-products-options');
    underMenu.style.display = 'grid';
    
});
document.querySelector('.nav-list-element').addEventListener('mouseleave', function () {
    const underMenu = document.querySelector('.nav-products-options');
    underMenu.style.display = 'none';
});
