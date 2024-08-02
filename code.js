let container = document.querySelector(".grid");
let colorPicker = document.querySelector("input");
let dimensions = document.querySelector("#dimensions");
let size = document.querySelector("#size");
let clear = document.querySelector("#clear");
let eraser = document.querySelector("#eraser");

function createGrid(length) {
    for(let i=0; i<length; i++)    {
        let row = document.createElement("div");  
        row.className = "row"; 
        container.appendChild(row);
        for(let j=0; j<length; j++) {
            let box = document.createElement("div");
            box.className  = "box";
            row.appendChild(box);
            
            box.style.width = `${32/length}rem`;
            box.style.height = `${32/length}rem`;

            box.addEventListener("mouseover", () =>   {
                if(eraser.value === "ON")   {
                        box.style.backgroundColor = "#FFFFFF";
                }
                else    {
                        box.style.backgroundColor = colorPicker.value;
                }
            });

           
        }
    }
}

function deleteGrid(length)   {
    document.querySelectorAll(".row").forEach((row) =>  {
        row.remove();
    })
}

size.addEventListener("mousemove", () =>  {
    dimensions.textContent = `Grid Size: ${size.value} x ${size.value}`;
});

size.addEventListener("mouseup", () =>  {
    deleteGrid();
    createGrid(size.value);
});

clear.addEventListener("click", () =>    {
    let boxes = document.querySelectorAll(".box");
    for(let i=0; i<size.value * size.value; i++) {
        boxes[i].style.backgroundColor = "#FFFFFF";
    }
})

clear.addEventListener("click", () =>    {
    let boxes = document.querySelectorAll(".box");
    for(let i=0; i<size.value * size.value; i++) {
        boxes[i].style.backgroundColor = "#FFFFFF";
    }
})

eraser.addEventListener("click", () =>  {
    if(eraser.value === "ON")   {
        eraser.value = "OFF";
        eraser.style.backgroundColor = "#008060";
    }
    else    {
        eraser.value = "ON"
        eraser.style.backgroundColor = "#003d2e";
    }
})

createGrid(50);

