const collumns = 9;

const urls = [
    ['chatgpt.png', 'https://chatgpt.com/'],
    ['usa-map.png', ' https://www.notion.so/USA-13f1a0e96a8e802f8b40cd4aacbd7d42'],
     ['github.png', 'https://github.com/LeanderZiehm/Orakel'],

   
    ['youtube.png', 'https://www.youtube.com'],
    // ['Notion-logo.svg', 'https://www.notion.so/Purpose-1031a0e96a8e807ebe14c5090237e4e7'],
    ['Notion-logo.svg', 'https://www.notion.so/Research-ea5e3db5d84e4d9d98177e5ec60b998d'],
    //['Notion-logo.svg', 'https://www.notion.so/Courses-AI-Uni-1231a0e96a8e80c590d4f675da83b8b1'],

    ['targetBW.png', 'https://www.notion.so/Todo-1231a0e96a8e8065844ccd4b67cd454d'],
           ['Notion-logo.svg', 'https://www.notion.so/Startups-Berlin-11f1a0e96a8e80c8b68cc46683aaf687'],
    // ['UnitedaiB.png', 'https://www.notion.so/United-AI-1101a0e96a8e800ca3d7ee6061e21556'],
    // ['canvaB.png', 'https://www.canva.com/design/DAGWFGJuvZo/z0L49gboov6zgHlFe602ug/edit?ui=eyJIIjp7IkEiOnRydWV9fQ&continue_in_browser=true'],//,'rgb(255,0,0)'
   //,'rgb(255,0,0)'
    // ['canvaB.png', 'https://www.canva.com/design?create=&type=TACQ-gtv2Yk&category=tAExRLg81RI&analyticsCorrelationId=50233cc8-0ec8-446f-a405-af8fff149381&continue_in_browser=true'],//,'rgb(255,0,0)'
    // ['canvaB.png', 'https://www.canva.com/design/DAGTKt-IFnI/17WpcytroUNUw-jrsHuNlw/edit?ui=eyJIIjp7IkEiOnRydWV9fQ&success=true&continue_in_browser=true'],//,'rgb(255,0,0)'
    ['drive.png', 'https://drive.google.com/drive/u/0/home'],
    ['gmail.png', 'https://mail.google.com/mail/u/2/#inbox'],
       ['whatsapp.png', 'https://web.whatsapp.com/'],
    ['webmail.svg', 'https://webmail.th-deg.de/'],
    ['docs.png', 'https://docs.google.com/document/u/0/create?usp=docs_home&ths=true'],
    ['sheets.ico', 'https://docs.google.com/spreadsheets/d/19GpreitF3gIOwaUYq8pNkLXWecOVei-6g0J_nXW6o24/edit?gid=0#gid=0'],
     // ['sheets.ico', 'https://docs.google.com/spreadsheets/u/0/create?usp=chrome_actions'],
   
    ['upwork.png', 'https://www.upwork.com/freelance-jobs/data-science/?category2_uid=531770282580668422&q=Data%20Science&sort=recency&subcategory2_uid=531770282597445634'],
    // ['upwork.png', 'https://www.upwork.com/freelance-jobs/artificial-intelligence/'],
    // ['fiverr.png', 'https://www.fiverr.com/search/gigs?query=artificial%20intelligence&source=top-bar&acmpl=1&search_in=everywhere&search-autocomplete-original-term=artific&search-autocomplete-available=true&search-autocomplete-type=suggest&search-autocomplete-position=1&ref_ctx_id=fc46e9e41ebf4f39a6331c23fe7ad9a1'],
    // ['idea.png', 'https://www.notion.so/Project-Ideas-1171a0e96a8e8049874ee7c137a61e39'],
   
    // ['idea.png', 'https://www.office.com/launch/Visio/','rgb(0,0,0)'],
    // ['thdD.png', 'https://ilearn.th-deg.de/','rgb(0,0,0)'],
    // ['Notion-logo.svg', 'https://www.notion.so/Courses-AI-Uni-1231a0e96a8e80c590d4f675da83b8b1?showMoveTo=true&saveParent=true'],
    // ['Notion-logo.svg', ' https://www.notion.so/THD-Internship-Project-431a5fcdb3554e2db86fc74ac0ff9fc9'],
    ['thdD.png', 'https://pmit-int.th-deg.de/shkzeiterfassung/'],
    // ['thdD.png', 'https://ilearn.th-deg.de/my/'],
 
       // ['notebooklm.png', 'https://notebooklm.google.com/notebook/e131e5f8-8f2a-46bd-9d68-01f257895f0d'],
       ['drawio.ico', 'https://app.diagrams.net/'],
       ['mermaid.svg', 'https://mermaid.live/'],
        ['googleAnalytics.png', 'https://analytics.google.com/analytics/web/#/a288269016p446762083/admin/streams/table/'],
        // ['canva.ico', 'https://www.canva.com/?continue_in_browser=true'],
       // ['discord.png', 'https://discord.com/channels/827903896402788363/1301889478738317354'],

       // ['scholar.ico', 'https://scholar.google.com/'],
       // ['calendar.ico', 'https://calendar.notion.so/'],



   
];

async function recolorImage(imageSrc, overlayColor) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = 'icons/' + imageSrc;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');

            ctx.drawImage(img, 0, 0);
            ctx.globalCompositeOperation = 'source-atop'; // Overlay the color
            ctx.fillStyle = overlayColor; // Use the specified color
            ctx.fillRect(0, 0, img.width, img.height); // Fill the canvas with the color

            resolve(canvas.toDataURL()); // Return the new image as a data URL
        };
    });
}

async function createButtons(urls) {
    var container = document.getElementById("container");
    for (let i = 0; i < urls.length; i++) {
        const [imageSrc, link, overlayColor] = urls[i];

        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = '_blank';
        linkElement.id = "" + (i + 1);
        linkElement.style.position = 'relative'; // Required for absolute positioning of overlay

        const img = document.createElement('img');
        img.style.display = 'block'; // Ensures the image fills the linkElement

        // If overlayColor is specified, recolor the image
        if (overlayColor) {
            const recoloredImageSrc = await recolorImage(imageSrc, overlayColor);
            img.src = recoloredImageSrc; // Use the recolored image
        } else {
            img.src = 'icons/' + imageSrc; // Use the original image
        }

        linkElement.appendChild(img);
        container.appendChild(linkElement);
    }
}

function goTo(url, openInNewTab = true) {
    if (openInNewTab) {
        chrome.tabs.create({ url: url });
    } else {
        chrome.tabs.update({ url: url });
    }
}

function extractMainDomain(url) {
    var domain = url.replace(/(^\w+:|^)\/\//, '');
    var mainDomain = domain.split('/')[0];
    mainDomain = mainDomain.replace('www.', '');
    mainDomain = mainDomain.split('.')[0];
    return mainDomain;
}

function main() {
    window.focus();

    document.querySelector('#container').style.gridTemplateColumns = `repeat(${collumns}, 1fr)`;
    createButtons(urls);

    document.getElementById('search').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            var query = this.value.trim();
            this.value = '';
            if (query !== '') {
                url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
                goTo(url);
            }
        }
    });

    document.addEventListener('keydown', function (e) {
        var key = e.key;
        if (!isNaN(key) && key > 0 && key <= urls.length) {
            goTo(urls[key - 1][1]);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});
