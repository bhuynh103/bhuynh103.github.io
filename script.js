const projects = [
    // {
    //     title: "CubeSat Isaac Sim",
    //     desc: "Orbital mechanics and ADCS simulation in NVIDIA Isaac Sim. Features RTX-based star tracker simulation and magnetorquer physics.",
    //     tags: ["C++", "Isaac Sim", "PhysX"],
    //     link: "https://github.com/bhuynh103/cubesat"
    // },
    // {
    //     title: "Driving Score Isaac Sim",
    //     desc: "Evaluating driving skill.",
    //     tags: ["C++", "Isaac Sim", "PhysX"],
    //     link: "https://github.com/bhuynh103/cubesat"
    // },
    // {
    //     title: "Custom 3D Physics Engine",
    //     desc: "A lightweight rigid-body solver with GJK collision detection and sequential impulse constraints.",
    //     tags: ["C++", "Linear Algebra", "OpenGL"],
    //     link: "#"
    // },
    // {
    //     title: "Synthetic Data Pipeline",
    //     desc: "Automated generation of 100k+ labeled images for robot grasp detection using domain randomization.",
    //     tags: ["Python", "Omniverse", "Deep Learning"],
    //     link: "#"
    // },
    {
        title: "TFlux",
        desc: "Automatic cell segmentation with k-means clustering for Fourier analysis of in vivo tissue samples.",
        tags: ["Python", "Unsupervised Learning", "Image Analysis"],
        link: "#",
        image: "assets/tflux.png"
    },
    {
        title: "Custom Autograd Engine",
        desc: "Implementing neurons and automatic differentiation in Python to construct a simple neural network.",
        tags: ["Python", "Machine Learning", "Calculus"],
        link: "#"
    },
];

function renderProjects(filter = 'All') {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = ''; // Clear current grid

    projects.forEach(p => {
        if (filter !== 'All' && !p.tags.includes(filter)) return;

        const card = document.createElement('div');
        card.className = 'project-card';
        
        const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
        
        card.innerHTML = `
            ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-img">` : ''}
            <div>
                <h3>${p.title}</h3>
                <div class="tags">${tagsHTML}</div>
                <p class="desc">${p.desc}</p>
            </div>
            <a href="${p.link}" class="link-btn" target="_blank">Source Code</a>
        `;
        grid.appendChild(card);
    });
}

// Event Listeners for Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        renderProjects(e.target.innerText);
    });
});

// Initial Render
renderProjects();