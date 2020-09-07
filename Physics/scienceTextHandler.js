///the first item has to be text. Data given as strings in objext 
	
var scienceTextHandler = function(sctxt,nbofcols,myfontsize, x,yb,backgroundcolor){
			var fontToPix={16 :0.518, 18:0.62,20:0.617,22:0.606,24:0.597};////valid for verdana fonts only
			this.sctxt=sctxt;
			this.txt=Array(6);// nbof different modules txt or fraction
			this.todo=Object.keys(this.sctxt)
			//console.log(this.todo.length);
			var counter=0;
			this.y=Array(6);
			this.y[0]=yb;///gets adjusted by cumulating height of each canvas
			this.x=x;///remains constant
			this.nblett=nbofcols;
			this.fontsize=myfontsize;
			this.bgcolor=backgroundcolor;
			this.widthoftxtcanvas=fontToPix[myfontsize]; ///initialize with fontsize converter number
			this.widthoftxtcanvas=Math.round(this.widthoftxtcanvas*myfontsize*this.nblett);///get width of canvas necessary
			this.listofcanvasses=[];
			for(itemtype in this.sctxt){
				if(this.todo[counter].charAt(0)=='t'){//console.log(todo[counter].charAt(0));
					this.txt[counter]=new TextHandler(this.nblett,this.fontsize,this.x, this.y[counter],this.bgcolor);//width in nb of columns is 60-80,fontsize,maxheight,,x,y,bgcolor}
					var nextitem=this.sctxt[itemtype];
					var y=this.txt[counter].draw(nextitem);//this.sctxt.todo[counter]);
					this.y[counter+1]=this.y[counter]+y;
					//console.log("canvasw "+this.txt[counter].input.width); undefined
					this.listofcanvasses.push(this.txt[counter].input);
					counter++;
					}
				else {// if (todo[counter].charAt[0]=='f'){//console.log(todo[counter].charAt(0));	
					var nextitem=this.sctxt[itemtype];
					//console.log(nextitem);
					this.txt[counter]=new FractionHandler(nextitem,this.widthoftxtcanvas,this.x,this.y[counter], this.bgcolor); 
					this.txt[counter].drawf();
					this.y[counter+1]=this.y[counter]+60;
					//console.log(this.y[counter+1]);
					this.listofcanvasses.push(this.txt[counter].canvas);
					counter++;
					}
			 
			}
}	


var TextHandler=function(width,fontsize,x,y,bgcolor){
	this.input= document.createElement("TEXTAREA");
	this.input.style="position:absolute";
	this.input.style.top=y+"px";
	this.input.style.left=x+"px";
	this.input.style.background=bgcolor||"rgb(255,242,136)"; 
	this.input.style.color="black";
	this.input.style.font="Normal 22px Verdana";
	this.input.style.fontSize=fontsize+"px";
	this.input.cols=width||80;
	this.input.value="";
	this.input.style.border="none";
	//this.input.max-height=window.innerHeight;
	document.getElementById("the_div").appendChild(this.input);

	
	this.draw=function(string){
		this.string=string;
		this.input.value=this.string;
		this.input.height="auto";
		//console.log(this.input.style.width); he does not know
		//	console.log(this.input.width); // undefined
		
		this.input.style.height=this.input.scrollHeight+"px";
		return this.input.scrollHeight;	
		}
}
var FractionHandler=function(fract,width,left,top,backgrcolor){
	this.ident=fract[0];
	this.N=fract[1];
	this.D=fract[2];
	//console.log(this.N +", "+this.D);
	this.canvas=document.createElement("canvas");
	this.context=this.canvas.getContext('2d');
	this.canvas.style="position:absolute; "
	this.width=width||50;
	this.height=this.canvas.height=60;
	this.canvas.style.font="Normal 22px Verdana";
	this.canvas.style.left=left+"px"; 
	this.canvas.style.top=top+"px";
	this.bgcolor=backgrcolor;
	this.canvas.width=this.width;
				
	document.getElementById("the_div").appendChild(this.canvas);

	this.drawf=function(){//x,y are thecoord of fraction line
				this.context.fillStyle=this.bgcolor;  //"rgb(255,196,136)";//"rgb(255,242,136)";//;
				this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
				this.context.fillStyle="black";
				this.context.font="normal 20px Verdana";
				var idw=this.context.measureText(this.ident+" ").width;
				var Nw=this.context.measureText(this.N).width;
				var Dw=this.context.measureText(this.D).width;
				var longest=this.D;
				var lengthoffraction=Dw;
				this.context.fillText(this.ident,10, 30);
			
				if(Nw>Dw){ 
					longest=this.N;
					lengthoffraction=Nw;
					 }
				
				this.context.strokeStyle="black";
				this.context.beginPath();
				this.context.moveTo(idw+20,30);
				this.context.lineTo(idw+30+lengthoffraction,30);
				//this.context.moveTo(x,y);
				//this.context.lineTo(x+lengthoffraction,y);
				this.context.stroke();
				var xf=(longest==this.N)?10:(Math.floor(lengthoffraction-Nw)/2);
				this.context.fillText(""+this.N,idw+xf+5, 20);
				xf=(longest==this.D)?10:(Math.floor(lengthoffraction-Dw)/2);
				this.context.fillText(""+this.D,idw+xf+5, 55);
			/*
				var x=(smallest==this.N)?(Math.floor(lengthoffraction-Nw)/2):x;
				this.context.fillText(""+this.N,x+5, y-10);
				var x=(smallest==this.D)?(Math.floor(lengthoffraction-Dw)/2):x;
				this.context.fillText(""+this.D,x+5, y+25);*/
				}	
} 
var UpdatingText=function(left,top, width,height,backgrcolor){
	this.canvas=document.createElement("canvas");
	this.textctx=this.canvas.getContext('2d');
	this.canvas.style="position:absolute; "
	this.width=width||50;
	this.height=this.canvas.height=400;
	//this.canvas.style.font="Normal 22px Verdana";
	this.canvas.style.left=left+"px"; 
	this.canvas.style.top=top+"px";
	this.bgcolor=backgrcolor;
	this.canvas.width=this.width;
				
	document.getElementById("the_div").appendChild(this.canvas);

	this.update= function(a,tt,d,v)
		{this.textctx.font="Normal 22px Verdana";
	
		this.textctx.fillStyle="rgb(62,249,146)";//lightgreen
		this.textctx.fillRect(0,0, this.canvas.width, this.canvas.height);
		this.textctx.fillStyle="black"; 
		this.textctx.fillText( "Acceleration( m/sec\u00B2)  "+a, 15, 40);
		//this.textctx.fillText(a, (this.textcanvas.width)*5/8, 40);
		this.textctx.fillText("Time (sec)" ,15,80 );
		this.textctx.fillText( tt.toFixed(2) ,(this.canvas.width)*6/8, 80);
		this.textctx.fillText( "Displacement (m)",15,120);
		this.textctx.fillText( d.toFixed(2), (this.canvas.width)*6/8, 120);
		this.textctx.fillText("Velocity (m/sec)", 15, 160); 
		var wordwidth=this.textctx.measureText("velocity").width;
		this.textctx.fillText( v.toFixed(2), Math.max((this.canvas.width*6/8),wordwidth), 160);
		this.textctx.fillText("(km/hr)",this.textctx.measureText("velocity").width-15, 190); 
		this.textctx.fillText( (v*3.6).toFixed(2) ,Math.max((this.canvas.width*6/8),wordwidth) , 190);
			}
	 } 