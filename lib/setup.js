async function configure() {
    const settings = await fetch(`${window.location.href}settings.json`);
    const settingsData = await settings.json();
    const { 'github-repo': ghr } = settingsData;

    let ghBtn = document.getElementById('githubBtn');
    ghBtn.onclick = () => {
        window.open(ghr);
    };
}

configure();
