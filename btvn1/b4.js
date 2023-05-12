var user = [
    {
        ten:"alice",
        sdt:"0988668222"

    },
     {
        ten:"trtrt",
        sdt:"0988668222"

    },
    {
        ten:"av",
        sdt:"0988668222"

    },
    {
        ten:"qqq",
        sdt:"0988668222"

    },
];

var ip_dt = document.querySelector(".ip_dt")
var ip_ten = document.querySelector(".ip_ten")
var btn_them = document.querySelector(".btn_them")
var ip_timkiem = document.querySelector(".ip_timkiem")
var btn_tim= document.querySelector(".btn_tim")
var btn_xoa = document.querySelector(".btn_xoa")
var tbody = document.querySelector("tbody")

function showProduct() {
    tbody.innerHTML = user.map(function (item) {
        return `
            <tr>
                <td>${item.ten}</td>
                <td>${item.sdt}</td>
            </tr>
        
        `
    }).join("")
}

showProduct();
function addNew(e) {
    e.preventDefault()


    var newuser = {
       ten:ip_ten.value,
       sdt:ip_dt.value
    }
    
    user.push(newuser)
    console.log(user)
    showProduct()
}

btn_them.addEventListener("click", addNew)

function timkiem(e){
    e.preventDefault();
    const input = ip_timkiem.value;
    const array = user.filter(string=>{
        return string==input;
    })
    tbody.innerHTML = array.map(function (item) {
        return `
            <tr>
                <td>${item.ten}</td>
                <td>${item.sdt}</td>
            </tr>
        
        `
    }).join("")
}
btn_tim.addEventListener("click", timkiem)