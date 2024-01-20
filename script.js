document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mainContent = document.getElementById('main-content');

    // Header Image
    const headerImg = document.createElement('img');
    headerImg.src = 'KP_Banner_Image.png';
    headerImg.alt = 'KP_Data_Science';
    headerImg.width = 950;
    headerImg.height = 500;
    header.appendChild(headerImg);

    // Introduction
    const introSection = document.createElement('section');
    introSection.innerHTML = `
        <p>I'm a Data Scientist who believes in the magic of teamwork and the power of data. My superpower? Bridging interpersonal and communication skills with technical expertise to drive successful outcomes.</p>
        <img src="https://komarev.com/ghpvc/?username=kkprim&label=Profile%20views&color=0e75b6&style=flat" alt="kkprim" />
    `;
    mainContent.appendChild(introSection);

    // Innovations
    const innovations = [
        { title: 'AI Violinist: Crafting Notes Beyond Human', url: 'https://github.com/kkprim/Neural-Net-Generative-AI-Violin-Composition' },
        { title: 'MoodyManga: A New Wave Recommendation System', url: 'https://github.com/kkprim/MoodyManga_Mood_Based_Anime_Playlist_App' },
        { title: 'MoodyManga App: Mood-Based Anime Playlist Generator', url: 'https://moody-manga-app-ginakari.streamlit.app/' }
    ];
    const innovationsSection = document.createElement('section');
    let innovationsContent = '<h2>My Innovations:</h2><ul>';
    innovations.forEach(innovation => {
        innovationsContent += `<li><a href="${innovation.url}">${innovation.title}</a></li>`;
    });
    innovationsContent += '</ul>';
    innovationsSection.innerHTML = innovationsContent;
    mainContent.appendChild(innovationsSection);

    // Current Endeavors
    const endeavorsSection = document.createElement('section');
    endeavorsSection.innerHTML = `
        <h2>My Current Endeavors:</h2>
        <p>AWS Certified Cloud Practioner - in progress</p>
        <p>Tableau Data Analyst Certified - in progress</p>
    `;
    mainContent.appendChild(endeavorsSection);

    // Content Creations
    const contents = [
        { title: 'Statistical Notations: The Nursery Rhyme', url: 'https://medium.com/@kkprim/statistical-notations-the-nursery-rhyme-a9e165286c57' },
        { title: 'Detective Decision Tree: A Predictive Model Whodunit How To', url: 'https://medium.com/@kkprim/detective-decision-tree-a-predictive-model-whodunit-how-to-28103319fcd0' }
    ];
    const contentsSection = document.createElement('section');
    let contentsContent = '<h2>My Content Creations:</h2><ul>';
    contents.forEach(content => {
        contentsContent += `<li><a href="${content.url}">${content.title}</a></li>`;
    });
    contentsContent += '</ul>';
    contentsSection.innerHTML = contentsContent;
    mainContent.appendChild(contentsSection);

    // Contact and Social Links
    const contactSection = document.createElement('section');
    contactSection.innerHTML = `
        <h2>My Details:</h2>
        <p>📫 <a href="mailto:kkprim@gmail.com">kkprim@gmail.com</a></p>
        <a href="https://linkedin.com/in/kari-primiano" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="kari-primiano" height="30" width="40" /></a>
    `;
    mainContent.appendChild(contactSection);
});
