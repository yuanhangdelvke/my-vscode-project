document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取所有需要的 DOM 元素
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const mainImage = document.querySelector('.main-img');
    const navItems = document.querySelectorAll('.nav-item');
    const toyName = document.querySelector('.toy-name');
    const author = document.querySelector('.author');
    const desc = document.querySelector('.desc');

    // 2. 图片和信息数据
    const toys = [
        {
            url: "images/大积木.png",
            alt: "大积木",
            name: "无线积木",
            author: "练巧忠",
            description: "这款大型积木套装包含多种形状和尺寸的木块，可拼搭出各种创意造型，培养儿童的空间想象力和动手能力。采用优质榉木制作，环保无毒，安全可靠。"
        },
        {
            url: "images/大消防车.png",
            alt: "大消防车",
            name: "木质消防车",
            author: "张明远",
            description: "经典消防车造型，细节丰富，包含可旋转的云梯和可开启的车门。采用精密榫卯结构，无需胶水即可组装，展现了传统木工工艺的精髓。"
        },
        {
            url: "images/Rectangle 31.png",
            alt: "大师兔",
            name: "大师兔",
            author: "练巧忠",
            description: "练巧忠是浙江忠协工艺品有限公司董事长，也是浙江省工艺美术大师，他对木玩产品的设计和研发具有独到的见解。2019年，练巧忠从乐高玩具中获得灵感，研发生产了一款可以任意组合的积木，并确定为公司的主打产品。《大师兔》是由1324颗积木拼搭而成，其清新典雅的面部表情，传统的中国服饰，彬彬有礼的体态和木制潮玩特有的气质，赢得观众和评委们的一致好评。"
        },
        {
            url: "images/大潘多拉.png",
            alt: "大潘多拉",
            name: "潘多拉魔盒",
            author: "王建国",
            description: "灵感源自古希腊神话，这款木制潘多拉魔盒拥有复杂的机关结构，需要按照特定步骤才能打开。盒身雕刻精美花纹，既是玩具也是一件艺术品。"
        },
        {
            url: "images/大榫卯.png",
            alt: "大榫卯",
            name: "榫卯结构套装",
            author: "刘木工",
            description: "这套玩具展示了中国传统建筑中的榫卯结构，包含十余种不同的榫卯连接件，让孩子在玩乐中了解传统建筑智慧，培养对传统文化的兴趣。"
        }
    ];
    
    let currentIndex = 0;

    // 3. 更新显示内容的函数
    function updateDisplay(index) {
        // 检查索引有效性
        if (index >= 0 && index < toys.length) {
            currentIndex = index;
            const toy = toys[currentIndex];
            
            // 更新图片
            mainImage.src = toy.url;
            mainImage.alt = toy.alt;
            
            // 更新信息
            toyName.textContent = toy.name;
            author.textContent = toy.author;
            desc.textContent = toy.description;
            
            // 更新导航项激活状态
            updateNavActiveState();
        }
    }

    // 4. 更新导航项激活状态
    function updateNavActiveState() {
        navItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 5. 绑定左右箭头点击事件
    leftArrow.addEventListener('click', function() {
        const newIndex = (currentIndex - 1 + toys.length) % toys.length;
        updateDisplay(newIndex);
    });

    rightArrow.addEventListener('click', function() {
        const newIndex = (currentIndex + 1) % toys.length;
        updateDisplay(newIndex);
    });

    // 6. 绑定导航项点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            updateDisplay(index);
        });
    });

    // 7. 初始化页面
    updateDisplay(0);

    console.log('木玩展示页面加载完成，交互功能已就绪');
});