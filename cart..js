let product1 = 
{
  id: 0,
  brand: "Microsoft",
  title: "Microsoft Xbox X/S Wireless Controller White",
  imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  price: 1000,
  qty: 1
};

let product2 = 
{
  id: 1,
  brand: "Sony",
  title: "PlayStation DualSense Wireless Controller",
  imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS.SL1500.jpg",
  price: 3500,
  qty: 1
};
let product3 = 
{
  id: 2,
  brand: "Logitech",
  title: "Nintendo Switch OLED Console",
  imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech-headphone.jpg",
  price: 4000,
  qty: 1
};

let product4 = 
{
  id: 3,
  brand: "Razer",
  title: "Razer BlackWidow Mechanical Keyboard",
  imgURL: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
  price: 2000,
  qty: 1
};
// Array of all product
let products = [product1, product2, product3, product4];

// Function to display all product
function displayProducts(products)
{
     if (products.length == 0)
     {
        document.getElementById("productSection").innerHTML = "Cart Is Empty";
        return;
     }

      let eachitem = "";

      for (let item of products)
      {
         eachitem += `<div class="col-md-3">
                      <div class="card mb-4">
                       <div class="card-header">
                       <img src="${item.imgURL}" alt="" class="img-fluid" />
                      </div>

                    <div class="card-body text-center">
                       <h4 class="text-danger">${item.brand}</h4>
                       <h6>${item.title}</h6>
                       <h2>&#8377; ${item.price}</h2>

                    <button class="btn btn-danger"  onclick="decQty(${item.id})""><i class="fa-solid fa-minus"></i></button>

                        <span class="h2" id="qty-el-${item.id}">${item.qty}</span>

                        <button class="btn btn-success" onclick="incQty(${item.id})"><i class="fa-solid fa-plus"></i></button>

                    </div>

                    <div class="card-footer text-center text-dark">
                       Total Amount: ₹<span id="total-${item.id}">${item.price * item.qty}</span>
                    </div>

               </div>
            </div>`
        };
        // Insert all products at once
            document.getElementById("productSection").innerHTML = eachitem;}

            // Call display function after DOM is ready
            window.addEventListener('DOMContentLoaded',function()
            {
                displayProducts(products);

            });

            function incQty(id)
            {
                let newarr=[];
                for(let item of products)
                {
                     if(item.id==id)
                     {
                        let newobj={...item,qty:++item.qty};
                        newarr.push(newobj);
                     }
                     else
                     {
                        newarr.push(item);

                     }
                }
                products=newarr;
                displayProducts(products);
            }
           
             function decQty(id)
            {
                let newarr=products.map(function(item)
                {
                    if(item.id==id)
                    {
                        return{ ...item ,qty :item.qty>1? --item.qty:1};
                    }
                    else
                    {
                        return(item);

                    }
                }
                );
                products=newarr;
                displayProducts(products);
             }







