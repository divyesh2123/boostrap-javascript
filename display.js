

function display(p)
{
  let d = p.map((value,index)=>{

    return `<div class="col-4"><div class="card" style="width:400px">
    <img class="card-img-top" src="${value.image}" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${value.title}</h4>
      <p class="card-text">${value.description}</p>
      <button class="btn btn-primary" onclick="addToCart(${index});">Add To Cart</button>
    </div>
  </div></div>`

})

document.getElementById("display").innerHTML = d.join(" ");

}

display(data);

let cart= [];


const addToCart = (index)=>{

    let selectedprodct=  data[index];
    let cartitem = cart.find((arrayitem)=>{

      return  arrayitem.item.id ==selectedprodct.id;

    })

    if(cartitem == undefined)
    {
        cart.push({item : selectedprodct, count :1});

    }
    else
    {       
        cartitem.count = cartitem.count +1;


    }
   

    console.log(cart);
    document.getElementById("count").innerHTML = cart.length;

}


function searchItem()
{
  let searchItem = document.getElementById("searchTerm").value;

  let p = data.filter((v)=>{

        return v.title.indexOf(searchItem) >=0;

  })

  display(p);



}