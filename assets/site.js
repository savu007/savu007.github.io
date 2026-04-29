const siteShell = {
    title: 'Shreyas Avula',
    nav: [
        { href: 'index.html', label: 'About', key: 'home' },
        { href: 'projects.html', label: 'Projects', key: 'projects' },
        { href: 'blog.html', label: 'Miscellany', key: 'blog' },
        { href: 'contact.html', label: 'Contact', key: 'contact' }
    ],
    footer: '&copy; 2026 Shreyas Avula. All rights reserved.'
};

function createHeader() {
    const header = document.createElement('header');
    header.className = 'top-header';
    
    const title = document.createElement('h1');
    title.className = 'site-title';
    title.textContent = siteShell.title;
    
    const nav = document.createElement('nav');
    nav.className = 'nav-bar';
    const page = document.body.dataset.page || 'home';
    
    siteShell.nav.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.label;
        if (item.key === page) {
            link.className = 'current';
        }
        nav.appendChild(link);
    });
    
    header.appendChild(title);
    header.appendChild(nav);
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>${siteShell.footer}</p>`;
    return footer;
}

function renderShell() {
    const headerContainer = document.getElementById('site-header');
    const footerContainer = document.getElementById('site-footer');
    if (!headerContainer || !footerContainer) return;
    headerContainer.appendChild(createHeader());
    footerContainer.appendChild(createFooter());
}

function renderEmailLinks() {
    document.querySelectorAll('[data-email-link]').forEach(link => {
        const parts = ['shreyas', 'avula', String.fromCharCode(64), 'hot', 'mail', String.fromCharCode(46), 'com'];
        const email = parts.join('');
        link.href = `mailto:${email}`;
        link.textContent = email.replace(String.fromCharCode(64), ' [at] ').replace(String.fromCharCode(46), ' [dot] ');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderShell();
    renderEmailLinks();
});
