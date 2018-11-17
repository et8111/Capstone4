var items = LOADER();

function LOADER()
{
    var items = [["Cheesebuger",3.0,0],["Hamburger",3.0,0],["Bacon Smokehouse Burger",5.0,0]
    ,["Double Bacon Smokehouse Burger",5.0,0],["10 Piece Nuggets", 6.0, 0],["Double Cheeseburger",3.0,0]
    ,["Filet-O-Fish",3.0,0],["Artisan Grilled Chicken Sandwich",5.0,0],["Grilled Chicken Sandwich",3.0,0]
    ,["Double 1/4lb With Cheese",6.0,0]];
return items;
}

$( document ).ready(function() {
    for(var i = 0; i < items.length; i++)
    {
        var divNode = document.createElement('div');
        divNode.setAttribute("class", "item");
        var label1Node = document.createElement('label');
        label1Node.setAttribute("class", "num");
        (i+1 >= 10)?label1Node.innerHTML = (i+1)+") ":label1Node.innerHTML = "0"+(i+1)+ ") ";
        var buttonNode = document.createElement('button');
        buttonNode.setAttribute("onclick", "ADDER(this.innerHTML);");
        buttonNode.innerHTML = items[i][0];
        var label2Node = document.createElement('label');
        label2Node.setAttribute("class", "price");
        label2Node.innerHTML = " $" + items[i][1].toFixed(2);

        divNode.append(label1Node);
        divNode.append(buttonNode);
        divNode.append(label2Node);

        document.getElementById("left").append(divNode);
    }
});


function ADDER(s)
{
    var newItem = items.filter(a => a[0]==s);
    if (!checkCart(newItem))
    {
        var divNode = document.createElement('div');
        divNode.setAttribute("class", "cart");
        var label1Node = document.createElement('label');
        label1Node.setAttribute("class", "quantity");
        label1Node.setAttribute("style","text-align:left");
        label1Node.innerHTML = ++newItem[0][2] +"  ";
        var buttonNode = document.createElement('button');
        buttonNode.setAttribute("onclick","remover(this.parentElement);");
        buttonNode.setAttribute("styel","text-align:right");
        buttonNode.innerHTML = newItem[0][0];
        var label2Node = document.createElement('label');
        label2Node.setAttribute("id", "priceQ");
        label2Node.setAttribute("style","text-align:right; padding:rignt:16px;")
        label2Node.innerHTML = " $" + ((newItem[0][1] * newItem[0][2]) * 1.06).toFixed(2);

        divNode.append(label1Node);
        divNode.append(buttonNode);
        divNode.append(label2Node);

        document.getElementById("right").append(divNode);
    }

}

function remover(s)
{
    var x = items.findIndex(a => a[0] == s.childNodes[1].innerHTML);
    items[x][2]--;
    s.childNodes[0].innerHTML = items[x][2] + " ";
    if (s.childNodes[0].innerHTML == 0)
            s.remove();
    s.childNodes[2].innerHTML = " $"+(items[x][1]*s.childNodes[0].innerHTML*1.06).toFixed(2);
    }

//checks if already exists in the cart and adds to element
function checkCart(newItem)
{
    var flag = false;
    var list = document.getElementsByClassName("cart");
    if (list == null) return;
    for(var i = 0;i < list.length; i++)
    {
        if (newItem[0][0] == list[i].childNodes[1].innerHTML)
        {
            flag = true;
            list[i].childNodes[0].innerHTML = ++newItem[0][2] + " ";
            list[i].childNodes[2].innerHTML = " $" + ((newItem[0][1] * newItem[0][2]) * 1.06).toFixed(2);
        }
    }
    return flag;
}

function printer()
{
    for(var i = 0; i < items.length; i++)
    console.log(items[i][0] + " " + items[i][1] + " " + items[i][2]);
}

function STARTER()
{
    var s = document.getElementsByClassName("starter")[0].childNodes[0].innerHTML;
    if (s == "Start Order")
    {
        $('#right').fadeIn(1000);
        $('#left').fadeIn(1000);
    }
}