function open_page(pageName, element) {
    if (window.innerWidth > 1100) {
        return;
    }
    let i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].style.background="#000d4a"
        tabLink[i].style.color="#FFF"
    }
    document.getElementById(pageName).style.display="inline-block";
    element.style.background= "#FFFFFF";
    element.style.color="#7e7eff"
}

let master = document.getElementById('master-part-section');
master.style.display = "none";
let doctorate = document.getElementById('doctorate-part-section');
doctorate.style.display = "none";

let master_select_box = document.getElementById('master-select-box');
let bachelor_select_box = document.getElementById('bachelor-select-box');
let everything_article = document.getElementById('master-everything');
let include_article = document.getElementById('include-article');
let master_arrow = document.getElementById('master-arrow');
let bachelor_arrow = document.getElementById('bachelor-arrow');

master_select_box.onclick = () => {
    let i, hidden_text;
    master_select_box.style.height = '180px';
    hidden_text = document.getElementsByClassName('master-hidden-text');
    for (i = 0; i < hidden_text.length; i++) {
        hidden_text[i].style.display = 'block';
    }
    everything_article.style.display = 'none';
    master_arrow.style.display = 'none';
}

bachelor_select_box.onclick = () => {
    let i, hidden_text;
    bachelor_select_box.style.height = '180px';
    hidden_text = document.getElementsByClassName('bachelor-hidden-text');
    for (i = 0; i < hidden_text.length; i++) {
        hidden_text[i].style.display = 'block';
    }
    include_article.style.display = 'none';
    bachelor_arrow.style.display = 'none';
}
if (window.innerWidth < 1100) {
    document.getElementById("default-open").click();
}
