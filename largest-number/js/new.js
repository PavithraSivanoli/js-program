/*var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));
var num3 = parseInt(prompt("Enter third number: "));
var largest;

// check the condition
if(num1 >= num2 && num1 >= num3) 
{
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) 
{
    largest = num2;
}
else 
{
    largest = num3;
}
alert(largest);*/


/*var input = parseInt(prompt("Enter first number: "));
if ((input>='a')&&(input<='z'))
    {
	alert("it is a small alphabets")
    }
else if ((input>='A')&& (input<='Z'))
	{
		alert("it is a capital alphabets")
	}
else if((input>=0)&&(input<=99))
	{
		alert("it is a number")
	}
else
	{
		alert("it is a invalid input")
	}*/
	
	
/*var a=10,
b=7,
c=105,
d=2,
if (a>b && a>c && a>d)	
{
	if (b>c && b>d)
	{
		if (c>d)
		{
			console.log(a,b,c,d)
		}
         else 
           {
              console.log(a,b,d,c)	
             }
	}			 
    else if (c>b && c>d)
          {
			 if(b>d)
             {
             console.log(a,c,b,d)				 
             }
			 else
			 {
				 console.log(a,c,d,b)
			 }
		  }
      else 
	  {
		  if(b>c)
		  {
			  console.log(a,d,b,c)
		  }
		  else
		  {
			  console.log(a,d,c,b)
		  }
	  }
}
else if(b>a && b>c && b>d)
{
	if(a>c && a>d)
	{
		if(c>d)
		{
			console.log(b,a,c,d)
		}
		else
		{
			console.log(b,a,d,c)
		}
	}
	else if (c>a && c>d)
	{
		if (a>d)
		{
			console.log(b,c,a,d)
		}
		else
		{
			console.log(b,c,d,a)
		}
	}
	else if (d>a && d>c)
	{
		if(a>c)
		{
			console.log(b,d,a,c)
		}
		else
		{
			console.log(b,d,c,a)
		}
	}
}
else if(c>a && c>b && a>d)
{
	if(a>b && a>d)
	{
		if(b>d)
		{
			console.log(c,a,b,d)
		}
		else
		{
			console.log(c,a,d,b)
		}
	}
else if (b>d && b>a)
{
	if(d>a)
	{
		console.log(c,b,d,a)
	}
	else
	{
		console.log(c,b,a,d)
	}
}
else if (d>a && d>b)
{
	if(a>b)
	{
		console.log(c,d,a,b)
	}
	else
	{
		console.log(c,d,b,a)
	}
}
}
else if(d>a && d>b && d>c)
{
	if(a>b && a>c)
	{
		if(b>c)
		{
			console.log(d,a,b,c)
		}
		else
		{
			console.log(d,a,c,b)
		}	
	}
	else if (b>a && b>c)
	{
		if(a>c)
		{
			console.log(d,b,a,c)
		}
		else
		{
			console.log(d,b,c,a)
		}
	}
	else  if (c>a && c>b)
	{
		if(a>b)
		{
			console.log(d,c,a,b)
		}
		else
		{
			console.log(d,c,b,a)
		}
	}	
}*/	

// leap number or not 
var number = prompt('Enter a number:');
if((number%4==0) && (number%100!=0))
{
  alert("It is a Leap number");
}
else if(number%400==0)
{
  alert("It is a Leap number");
}
else
{
  alert("It is not a Leap number");
}



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	