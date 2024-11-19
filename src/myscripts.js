function addPosts(links) {
    const postsContainer = document.getElementById('posts-grid');
    
    links.forEach((link, index) => {

        const img = document.createElement('img');
        img.src = `./images/${index+1}.png`;
        img.alt = `Post ${index+1}`;
        
        if (link != "") {
            img.classList.add('p-1', 'rounded-md', 'md:rounded-lg', 'lg:rounded-2xl');
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.target = '_blank';
            anchor.classList.add('relative', 'inline-block', 'transition', 'hover:brightness-75');

            const div = document.createElement('div');
            div.classList.add('absolute', 'h-11', 'w-11', 'bg-black', 'bottom-4', 'left-4', 'z-9', 'rounded-full', 'flex', 'justify-center', 'items-center', 'opacity-85');
            div.innerHTML = `<svg class="z-10 text-white" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"/></svg>`

            anchor.appendChild(img);
            anchor.appendChild(div);
            postsContainer.prepend(anchor);
        } else {
            img.classList.add('p-1', 'rounded-md', 'md:rounded-lg', 'lg:rounded-2xl');
            postsContainer.prepend(img);
        }

    });
}

const liksArray = [
    "", //Post 1
    "https://www.behance.net/gallery/212081289/Claudio-Bellanti-Logo-Design-and-Brand-Identity",
    "https://www.behance.net/gallery/190976995/Redesign-Stemma-del-Comune-di-Ravanusa-Team-Project",
    "" //Post 4
];

addPosts(liksArray);