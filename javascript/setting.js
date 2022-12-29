const color = [
    {
        name: 'pink',
        code: '#fb839e',
        url: 'css/pink.css',
    },
    {
        name: 'light blue',
        code: '#3e99f4',
        url: 'css/lightblue.css',
    },
    {
        name: 'light green',
        code: '#0dcebd',
        url: 'css/lightgreen.css',
    },
    {
        name: 'red',
        code: '#cc3b3b',
        url: 'css/red.css',
    },
    {
        name: 'yellow',
        code: '#ff9800',
        url: 'css/yellow.css',
    },
];

$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
                    span.style.backgroundColor = color[i].code;
                    $(".colors").append(span);
        }
    }

    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href",color[index].url);
    });

    $(".theme-mode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark");
        } else {
            $("body").addClass("dark");
        }
    })

    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    });
});