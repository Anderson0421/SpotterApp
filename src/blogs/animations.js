export const fadeIn = () => {
    const sections = document.querySelectorAll('.animate-fade-in');
    sections.forEach(section => {
        section.classList.add('fadeIn');
    });
}

export const fadeOut = () => {
    const sections = document.querySelectorAll('.animate-fade-in');
    sections.forEach(section => {
        section.classList.remove('fadeIn');
    });
}

export const slideIn = () => {
    const sections = document.querySelectorAll('.animate-slide-in');
    sections.forEach(section => {
        section.classList.add('slideIn');
    });
}

export const slideOut = () => {
    const sections = document.querySelectorAll('.animate-slide-in');
    sections.forEach(section => {
        section.classList.remove('slideIn');
    });
}
