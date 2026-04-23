const siteShell = {
    title: 'Shreyas Avula',
    nav: [
        { href: 'index.html', label: 'about me', key: 'home' },
        { href: 'projects.html', label: 'things i\'m doing', key: 'projects' },
        { href: 'blog.html', label: 'things i\'m into', key: 'blog' },
        { href: 'contact.html', label: 'find me here', key: 'contact' }
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

document.addEventListener('DOMContentLoaded', renderShell);
