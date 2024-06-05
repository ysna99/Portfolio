'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    // 버튼 사이 빈 공간 클릭 했을 경우
    if (filter == null) {
        return;
    }
    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
           project.
        }
        else {
            
        }
})
});