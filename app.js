let currentProject = 1;
const totalProjects = document.querySelectorAll('.project').length;

function showProject() {
    const projectsContainer = document.querySelector('.projects');
    projectsContainer.style.transform = `translateX(-${(currentProject - 1) * 100}%)`;
}

function prevProject() {
    currentProject = (currentProject === 1) ? totalProjects : currentProject - 1;
    showProject();
}

function nextProject() {
    currentProject = (currentProject === totalProjects) ? 1 : currentProject + 1;
    showProject();
}
