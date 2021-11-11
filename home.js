fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=59f826f1e3ff483b850363e277766ca6")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res.articles)
    let data=res.articles;
    show_direct(data);
})
 function show_direct(data){
let parent=document.getElementById('home1')

parent.innerHTML=null
data.forEach((el)=>{

    let news=document.createElement('h3');
    news.innerText=el.title;
    let aurthor=el.aurthor;
    news.addEventListener('click',()=>{
        parent.innerHTML=null
        let parent_news=document.getElementById('detail');
   let news_detail=document.createElement('h4');
   news_detail.innerText=el.content;
   let description =document.createElement('h2');
   description.innerText=el.description;
  
   parent_news.append(news_detail,description);
    });

    parent.append(news);
})
 }







let search=document.getElementById('search');
let search_button=document.createElement('button');
search_button.innerText="search news"
let inpt=document.createElement('input');

search_button.addEventListener('click',()=>{
    let data_value=inpt.value;
news(data_value);
})
 search.append(inpt,search_button)

function news(data_value){
let input_data=data_value;
fetch(`https://newsapi.org/v2/everything?q=${input_data}&from=2021-09-18&sortBy=publishedAt&apiKey=59f826f1e3ff483b850363e277766ca6`)
.then((res)=>{
    console.log(res)
    return res.json();
})
.then((res)=>{
    console.log(res.articles)
    let data=res.articles;
    show_news(data);
})
}


function show_news(data){
    let parent=document.getElementById('home')
    let home1=document.getElementById('home1');
    home1.innerHTML=null
    parent.innerHTML=null
    data.forEach((el)=>{
    
        let news=document.createElement('h3');
        news.innerText=el.title;
        let aurthor=el.aurthor;
        news.addEventListener('click',()=>{
            parent.innerHTML=null
            let parent_news=document.getElementById('detail');
       let news_detail=document.createElement('h2');
       news_detail.innerText=el.content;
       let description =document.createElement('h2');
       description.innerText=el.description;
       parent_news.append(news_detail,description);
        });

        parent.append(news);
    })
}
