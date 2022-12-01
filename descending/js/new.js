var a=20;
var b=30;
var c=10;
var d=40;

if ((a>b)&&(a>c)&&(a>d))
{
	if ((b>c)&&(b>d))
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
}

/*if ((a>b) && (a>c) && (a>d))
{
        if ((b>c)&&(b>d))
        {
            if(c>d)
			{
				console.log(a,b,c,d);
			}
			else
			{
				console.log(a,b,d,c)
			}
        }
       else
		{
			console.log(a,b,d,c);
		}
}

		
if ((b>a) && (b>c) && (b>d))
{
        if ((a>c)&& (a>d))
        {
            if(c>d)
			{
				console.log(b,a,c,d);
			}
			else{
				console.log(b,a,d,c)
			}
			
		}
		else
		{
			console.log(b,a,d,c);
		}

}
else
{
}
 if ((c>a) && (c>b) && (c>d))
{
        if ((a>b)&&(a>d))
        {
           if(b>d)
			{
				console.log(c,a,b,d);
			}
			else
			{
				console.log(c,a,d,b)
			}
		}
			else
		{
			console.log(c,a,d,b);
		}

}
else
{
}
 if ((d>a) && (d>b) && (d>c))
{
        if ((a>b)&&(a>c))
        {
         if(b>c)
			{
				console.log(d,a,b,c);
			}
			else
			{
				console.log(d,a,c,b)
			}
		}
		
			else
		{
			console.log(d,a,d,c);
		}

}
else
{
}
*/
var mark = parseInt(prompt("Enter first number: "));

// check the condition
if(mark >=95 & mark<=100) 
{
alert("print o grade ");
}
if(mark >=90 & mark<=95) 
{
alert("print A grade ");
}
if(mark >=80 & mark<=91) 
{
alert("print B grade ");
}
if(mark >=70 & mark<=81) 
{
alert("print C grade ");
}
if(mark >=60 & mark<=71)
{
alert("print D grade ");
}
if(mark >=49 & mark<=61) 
{
alert("print E grade ");
}
if(mark >=0 & mark<=50) 
{
alert("print F grade ");
}
else
{ 
alert("put invalid input");
}
