var heart;
//storing the id value
var price=['price1','price2','price3','price4','price5'];
     var sale=['sold-item1','sold-item2','sold-item3','sold-item4','sold-item5'];
	   var watch=['watch1','watch2','watch3','watch4','watch5'];
	   var item=['item1','item2','item3','item4','item5'];
     var rate=['rating1','rating2','rating3','rating4','rating5'];

//storing item details in array of  objects
	   var content=[
       {
         url:'https://s19.postimg.org/quhzab6c3/ng38003pp08-fastrack-original-imaehtffnwbhebdd.jpg',
 model:'Fastrack NG3120SL01C Bare Analog Watch - For Men',rating:'3.8',sold:'2,445',price:'1,435' },

	      {url:'https://s19.postimg.org/7rylndvbn/200-flavored-amul-original-imaeu9fnwhbu9ww2.jpg',model:'Lois Caron Lcs-4048 Chronograph Pattern Analog Watch - For Men',rating:'4.2',sold:'1,200',price:'3,450'},
	      {url:'https://s19.postimg.org/vuffi9byr/bt6126-britex-original-imaetrugy3raybn9.jpg',model:'Britex BT6126 Mack~X~ Sports Analog Watch - For Men',rating:'4.1',sold:'8,00',price:'5,650'},
	      {url:'https://s19.postimg.org/h2fb4nvf7/38031pp02j-fastrack-original-imaepzfkyz8azcjy.jpg',model:'Fastrack 38031PP02J Analog Watch - For Men',rating:'3.2',sold:'3,100',price:'4,000'},
	      {url:'https://s19.postimg.org/kkrb11wb7/3120sl01-fastrack-original-imaeymyukdgzxqxf.jpg',
	      	model:'Fastrack 38031PP02J Analog Watch - For Men',rating:'4.8',sold:'2,000',price:'1,900'}];

//displaying all data
	   for (var i=0;i<content.length;i++)
	   {
	   	
	   	var imageUrl="url(' "+content[i].url+ " ')";  
	   	document.getElementById(watch[i]).style.backgroundImage=imageUrl;
	   	document.getElementById(item[i]).innerHTML=content[i].model;
	   	document.getElementById(rate[i]).innerHTML=content[i].rating;
                document.getElementById(sale[i]).innerHTML="("+content[i].sold+")";
                document.getElementById(price[i]).innerHTML=content[i].price;
        
	   }

var count=0;

//Adding font awesome icons

var stars = document.getElementsByClassName('star');
for(var i = 0; i < stars.length; i++) {
    stars[i].classList.add("fa","fa-star");
}
var circle=document.getElementsByClassName('circle');
for(var i = 0; i < circle.length; i++) {
    circle[i].classList.add("fa","fa-check-circle");
}
var inr=document.getElementsByClassName('inr');
for(var i = 0; i <inr.length; i++) {
    inr[i].classList.add("fa","fa-inr");
}
    
	   $('.offer-detail:even').text("No cost EMI and 1 more");
	   $('.offer-detail:odd').text("Bank offer");
	   $('.offer').text('Offers');

var addheart=document.getElementsByClassName('icon');
for(var i=0;i<addheart.length;i++)
{
   addheart[i].classList.add('fa','fa-heart-o');
  
}

	   $('.item-detail').on('mouseover',function()
	   {   
       
      $('.selected').removeClass('selected');
	   	$(this).addClass('selected');
	 
	   	});

         
      $('.item-detail').on('mouseout',function()
	   {   		
	    $('.selected').removeClass('selected');
	  
	   	});
         
//getting the id of clicked element
  var icon_id=document.getElementsByClassName('icon');
 for(var i=0;i<icon_id.length;i++)
  {
   icon_id[i].onclick = function(e) {
 // console.log(e.srcElement.id);
  var ele=e.srcElement.id;
  heart=document.getElementById(ele);
  check();
   }
}

function check()
{
  if(heart.classList.contains('fa-heart-o'))
    {
      heart.classList.remove('fa-heart-o');
      heart.classList.add("fa","fa-heart");
      countInc();
    }
  else
  {
    heart.classList.remove('fa-heart');
     heart.classList.add("fa","fa-heart-o");
     countDec();
  }

}

	function countInc()
    {
    
    function inc()
    {
    	count=count+1;
    	document.querySelector(".like").innerHTML="("+count+")";
    
      document.querySelector('.text-pop').innerHTML='Item added to cart successfully';
        	display();
      
    }
    return inc();
    	

    }

    function countDec()
    {
    	function dec()
    	{
    		count=count-1;
    		document.querySelector('.like').innerHTML="("+count+")";
        document.querySelector('.text-pop').innerHTML='Item removed from cart successfully';
        display();
    	}
    	return dec();
    }   
function display()
  {  
$('.text-pop').css("display","inline-block").fadeOut(2000,"linear");
$('.circle').css("display","inline-block").fadeOut(2000,"linear");
  
}
   		
