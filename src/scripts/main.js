const articleHeader = document.querySelector('.article__header');

articleHeader.textContent = ('Welcome to the MASTER ALEX blog');

const allArticleHeader = document.querySelectorAll('.article__header');

for (var i = 0; i < allArticleHeader.length; i++) {
    allArticleHeader[i].classList.remove('article__header');
    allArticleHeader[i].classList.add('article__headerimportant')
    console.log (allArticleHeader[i].classList);
}


const dash = document.querySelector('.dashed');

dash.classList.remove('dashed');

const footer = document.querySelector('.article__footer');

footer.classList.add('goldenrod');