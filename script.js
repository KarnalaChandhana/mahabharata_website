document.addEventListener("DOMContentLoaded", () =>{
    const quotes=document.querySelectorAll(".quote");
    const hoverInfo=document.querySelector(".hover-info");
    const hoverImage=document.querySelector(".hover-image");
    const hoverDescription=document.querySelector(".hover-description");

    quotes.forEach(quote=>{
        quote.addEventListener("mouseenter",()=>{
            const description=quote.getAttribute("data-description");
            const imageSrc=quote.getAttribute("data-image");
            hoverImage.src=imageSrc
            hoverDescription.textContent=description;

            hoverInfo.style.display="block";
            hoverInfo.style.top='${quote.getBoundingClientRect().top + window.scrolly-100}px';
            hoverInfo.style.left='${quote.getBoundingClientRect().left + window.scrolly-50}px';
        });
        quote.addEventListener("mouseleave",()=>{
            hoverInfo.style.display="none";
        });
    });
});