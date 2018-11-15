var items = LOADER();

function LOADER()
{
    var items = [];
    var item1 = ["Cheesebuger",3.0,0];
    items.push(item1);
    var item1 = ["Hamburger",3.0,0];
    items.push(item1);
    var item1 = ["Bacon Smokehouse Burger",5.0,0];
    items.push(item1);
    var item1 = ["Double Bacon Smokehouse Burger",5.0,0];
    items.push(item1);
    var item1 = ["10 Piece Nuggets", 6.0, 0];
    items.push(item1);
    var item1 = ["Double Cheeseburger",3.0,0];
    items.push(item1);
    var item1 = ["Filet-O-Fish",3.0,0];
    items.push(item1);
    var item1 = ["Artisan Grilled Chicken Sandwich",5.0,0];
    items.push(item1);
    var item1 = ["Grilled Chicken Sandwich",3.0,0];
    items.push(item1);
    var item1 = ["Double 1/4lb With Cheese",6.0,0];
    items.push(item1);
return items;
}

LOADER();
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
        label2Node.innerHTML = " : $" + items[i][1];

        divNode.append(label1Node);
        divNode.append(buttonNode);
        divNode.append(label2Node);

        document.getElementById("left").append(divNode);
    }
   // printer();
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
        label1Node.innerHTML = ++newItem[0][2];
        var buttonNode = document.createElement('button');
        buttonNode.innerHTML = newItem[0][0];
        var label2Node = document.createElement('label');
        label2Node.setAttribute("id", "priceQ");
        label2Node.innerHTML = " : $" + ((newItem[0][1] * newItem[0][2]) * 1.06).toFixed(2);

        divNode.append(label1Node);
        divNode.append(buttonNode);
        divNode.append(label2Node);

        document.getElementById("right").append(divNode);
    }

}

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
            ++list[i].childNodes[0].innerHTML;
            newItem[0][2]++;
            list[i].childNodes[2].innerHTML = " : $" + ((newItem[0][1] * newItem[0][2]) * 1.06).toFixed(2);
        }
    }
    return flag;
}

function printer()
{
    for(var i = 0; i < items.length; i++)
    console.log(items[i][0] + " " + items[i][1] + " " + items[i][2]);
}