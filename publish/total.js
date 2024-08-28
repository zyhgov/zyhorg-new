const cards = [
    // 这里是你的卡片数据数组
    // 例如：
    { id: 4, title: '杖雍皓 20240828 版简历存档', subtitle: '此用于存放简历文件以便于任何地方下载与预览。', imgSrc: '/statics/image/logo/zyh-logo.png' },
    { id: 3, title: '2024第6次网站停摆恢复说明', subtitle: '技术安全支持与更新。', imgSrc: '/statics/image/logo/zyh-logo.png' },
    { id: 2, title: '网站制作管理委员会开通1周年', subtitle: '去年的8月6日，杖雍皓zyhgov创建了网站制作管理委员会', imgSrc: '/statics/image/logo/zyh-logo.png' },
    { id: 1, title: '新版网站上线', subtitle: '由于现实需要，我们 ( 杖雍皓 | 乌龙茶不乌龙 ) 现在全面更新了网站系统，同时保留旧版网站正常访问资源。', imgSrc: '/statics/image/logo/wlcbwl-oolong-lanlv.png' },

    // 更多卡片...
];

const cardsPerRow = 5; // 每页显示的卡片数量
let currentPage = 1;

function renderCards(page) {
    const startIndex = (page - 1) * cardsPerRow;
    const endIndex = startIndex + cardsPerRow;
    const container = document.getElementById('cardsContainer');
    container.innerHTML = ''; // 清空容器

    for (let i = startIndex; i < Math.min(endIndex, cards.length); i++) {
        const card = cards[i];
        const cardElement = `
            <div class="card">
                <img src="${card.imgSrc}" alt="示例图片" class="card-image">
                <div class="card-content">
                    <h1 class="card-title">${card.title}</h1>
                    <p class="card-subtitle">${card.subtitle}</p>
                    <a href="branch/${card.id}.html" class="card-button">了解更多</a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardElement);
    }
}

function updatePagination() {
    const totalPages = Math.ceil(cards.length / cardsPerRow);
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    if (totalPages > 1) {
        const prevPageLink = document.createElement('li');
        prevPageLink.className = 'page-item';
        const prevPageA = document.createElement('a');
        prevPageA.className = 'page-link';
        prevPageA.href = '#';
        prevPageA.textContent = '上一页';
        prevPageA.id = 'prevPage';
        prevPageA.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderCards(currentPage);
                updatePagination();
            }
        });
        if (currentPage === 1) {
            prevPageA.classList.add('disabled');
        }
        prevPageLink.appendChild(prevPageA);
        pagination.appendChild(prevPageLink);

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = 'page-item';
            const pageLink = document.createElement('a');
            pageLink.className = 'page-link';
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.addEventListener('click', () => {
                currentPage = i;
                renderCards(currentPage);
                updatePagination();
            });
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageItem.appendChild(pageLink);
            pagination.appendChild(pageItem);
        }

        const nextPageLink = document.createElement('li');
        nextPageLink.className = 'page-item';
        const nextPageA = document.createElement('a');
        nextPageA.className = 'page-link';
        nextPageA.href = '#';
        nextPageA.textContent = '下一页';
        nextPageA.id = 'nextPage';
        nextPageA.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderCards(currentPage);
                updatePagination();
            }
        });
        if (currentPage === totalPages) {
            nextPageA.classList.add('disabled');
        }
        nextPageLink.appendChild(nextPageA);
        pagination.appendChild(nextPageLink);
    }
}

// 初始化
renderCards(currentPage);
updatePagination();
