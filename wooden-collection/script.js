// 玩具数据
const toysData = [
    { name: "鲁班锁", type: "puzzle", era: "1", image: "images/Rectangle 25.png" },
    { name: "榫卯积木", type: "folk", era: "1", image: "images/Rectangle 26.png" },
    { name: "投壶", type: "folk", era: "2", image: "images/Rectangle 27.png" },
    { name: "华容道", type: "puzzle", era: "2", image: "images/Rectangle 28.png" },
    { name: "消防车", type: "puzzle", era: "3", image: "images/消防车.png" },
    { name: "农场动物车", type: "folk", era: "3", image: "images/农场动物车.png" },
    { name: "海盗船", type: "puzzle", era: "1", image: "images/海盗船.png" },
    { name: "诺亚方舟", type: "folk", era: "2", image: "images/诺亚方舟.png" },
    { name: "无线积木", type: "puzzle", era: "3", image: "images/无线积木.png" },
    { name: "大师兔", type: "folk", era: "1", image: "images/大师兔.png" },
    { name: "潘多拉魔盒", type: "puzzle", era: "2", image: "images/潘多拉魔盒.png" },
    { name: "木陀螺", type: "folk", era: "3", image: "images/木陀螺.png" },
];

// 当前激活的筛选条件
let activeFilters = {
    type: 'all',
    era: 'all'
};

// DOM 元素
const toysGrid = document.querySelector('.toys-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// 初始化页面
function init() {
    renderToys(toysData);
    setupEventListeners();
}

// 渲染玩具列表
function renderToys(toys) {
    toysGrid.innerHTML = ''; // 清空现有内容

    if (toys.length === 0) {
        toysGrid.innerHTML = '<p class="no-results">没有找到匹配的玩具</p>';
        return;
    }

    toys.forEach(toy => {
        const toyItem = document.createElement('div');
        toyItem.className = 'toy-item';
        toyItem.dataset.type = toy.type;
        toyItem.dataset.era = toy.era;
        
        toyItem.innerHTML = `
            <img src="${toy.image}" alt="${toy.name}" class="toy-img">
            <p class="toy-name">${toy.name}</p>
        `;
        
        toysGrid.appendChild(toyItem);
    });
}

// 设置事件监听器
function setupEventListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.dataset.filter; // 'type' 或 'era'
            const filterValue = this.dataset.value; // 'all', 'folk', '1', 等

            // 更新激活的筛选条件
            activeFilters[filterType] = filterValue;

            // 更新按钮的激活状态
            updateActiveButtons(filterType);

            // 筛选并渲染玩具
            filterAndRenderToys();
        });
    });
}

// 更新筛选按钮的激活状态
function updateActiveButtons(filterType) {
    document.querySelectorAll(`.filter-btn[data-filter="${filterType}"]`).forEach(btn => {
        if (btn.dataset.value === activeFilters[filterType]) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 根据当前筛选条件筛选并渲染玩具
function filterAndRenderToys() {
    const filteredToys = toysData.filter(toy => {
        const matchesType = activeFilters.type === 'all' || toy.type === activeFilters.type;
        const matchesEra = activeFilters.era === 'all' || toy.era === activeFilters.era;
        return matchesType && matchesEra;
    });

    renderToys(filteredToys);
}

// 当 DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', init);