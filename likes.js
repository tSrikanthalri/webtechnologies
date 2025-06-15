let likesBtn = document.getElementById('#likes-btn');
let dislikesBtn = document.getElementById('#dislikes-btn');
let likesEle = document.getElementById('#likes');
let dislikesEle = document.getElementById('#dislikes');
let totalEle = document.getElementById('#total');


let likes = 0;
let dislikes = 0;
let total = 0;

likesEle.textContent=likes;
dislikesEle.textContent=dislikes;
totalEle.textContent=likes+dislikes;


function likesCount()
{
    likes++;
    likesEle.textContent = likes;
    updateTotal();
}
likesBtn.addEventListener('click',likesCount);


function dislikesCount()
{
    dislikes++;
    likesEle.textContent = dislikes;
    updateTotal();
}

dislikes.addEventListener('click',dislikesCount);

function updateTotal()
{
    totalEle.textContent=likes+dislikes;
}
