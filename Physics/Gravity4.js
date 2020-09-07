var imgpix={ball: {x:505, y:21, w:39, h:39}, apple: {x:503,y:84, w:43, h:46}, boywithsling: {x: 640, y:7, w: 94, h: 214}, galaxies: {x:462, y:226, w:273, h:176}, Newton: {x:515, y:414, w:218,h:224}, branch:{x:259, y:681, w:309, h:152},earth: {x:8, y:551 ,w:228, h:235 }, moon: {x:574, y:648 ,w:162, h:162 },solarsystem: {x:3, y: 201,w:446, h:337 }, storey:{x:295, y: 575 ,w: 100 , h:30}, groundfloor : {x:297, y: 628 ,w:98 , h:29 }, ball_throwing : {x:0, y:0 ,w:94 , h:189 }};
var startbutton=null; var nextbutton=null; var stopbutton=null;
var graph_v=null; var graph_d=null;
scnb=1;///start at 1 ,but texts at 0
var animationstopped=false;
var mytext=null; var mytitle=null; var dtext=null;
title=["CENTRIPETAL FORCE","GRAVITATIONAL FORCE","UNIVERSAL LAW OF GRAVITATION"];
text=Array(14);
text[0]="The stone moves along a circular path, continuously changing direction. When the string breaks, the stone flies off along a straight line. That is because it continues in the same direction as it was moving at the instant the string broke (Newton's first law). So, to keep the stone in a circular path, a force is needed. This is the CENTRIPETAL FORCE";
text[1]="The motion of the moon around the earth is also due to a centripetal force, no string though! The GRAVITATIONAL FORCE attracts the moon to the earth (and the earth to the moon.)";
text[2]={txt1:"Isaac Newton wondered if the force that made the apple fall was the same as the one keeping the moon in an orbit around the earth. He also used Kepler's laws of planetary motion to derive his UNIVERSAL LAW OF GRAVITATION", fr1:["F= ", "G x M x m", "R\u00B2"], fr2: ["where G=", "6.67x10\u207B\u00B9\u00B9N m\u00B2","kg\u00B2"], txt2: "is the universal gravitational constant. \nM and m are the masses of the 2 objects.\nR is the distance between the 2 objects"};
text[3]="This UNIVERSAL LAW OF GRAVITATION  applies to all planets of the solar system";
text[4]="This UNIVERSAL LAW OF GRAVITATION  applies to all galaxies of the universe";
text[5]={txt1:"To calculate the force with which the Sun attracts the Earth, assume\n  mass of the Sun : 2 x 10\u00B3\u2070 kg\n  mass of the Earth: 6 x 10\u00B2\u2074 kg\n  radius of Earth's orbit around the Sun : 15 x 10\u00B9\u2070 m \n ", fr1: ["F = 6.67x10\u207B\u00B9\u00B9 x","2x10\u00B3\u2070 x 6x10\u00B2\u2074 N m\u00B2 kg\u00B2","15x15x10\u00B2\u2070 kg\u00B2 m\u00B2"],  txt2 : "  = 3.56 x 10\u00B2\u00B2 N"};
text[6]={txt1:"Let's apply this Universal Law of Gravitation to the Earth and to us.\nIf we compare the Universal Law of Gravitation F = G  M m/ R\u00B2  to Newton's second law of motion  F = m  a, we see that indeed  G M/ R\u00B2 has the dimensions of an acceleration  N m\u00B2/kg\u00B2 x  kg/m\u00B2 =  m/sec\u00B2.\nThis value is a constant for objects near the surface of the earth. We use: \n  G= universal gravitation constant : 6.67x10\u207B\u00B9\u00B9 Nm\u00B2/kg\u00B2\n  M= mass of earth : 6.0 x 10\u00B2\u2074 kg\n  R= radius of the earth : 6.38 X 10\u2076 m\n",fr1 :[" acceleration =", "6.67 x 10\u207B\u00B9\u00B9 x 6.0 x 10\u00B2\u2074 Nm\u00B2kg", "6.38x6.38 x 10\u00B9\u00B2 kg\u00B2 m\u00B2"],txt2 : " We obtain : Acceleration = 9.81 m/sec\u00B2, which we call g"};
text[7]={txt1 :"Your weight is the force with which the Earth attracts your mass. So, weight= m x g. It is expressed in Newtons (N).\n What about your weight on the Moon? The Moon's mass is 80 times less (7.34 x 10\u00B2\u00B2 kg) than Earth's mass, the Moon's radius is less too(1.74 x 10\u2076 m). Your weight (the force of attraction on your mass) will be about 6 times less than on Earth. Your MASS is a CONSTANT.\n " ,fr1: ["gravity on moon = 6.67x10\u207B\u00B9\u00B9 x", "7.34 x 10\u00B2\u00B2 N m\u00B2 kg", "1.74x1.74 x 10\u00B9\u00B2 kg\u00B2 m\u00B2 "], txt2 :"   = 1.63 m/sec\u00B2.\nSo, if you weigh 42 kg on the earth, you will weigh only 7 kg on the moon"};
text[8]="In the next exercise we calculate the velocity and displacement of a ball falling from a 113 m-high building (38 floors). It's a FREE FALL because no forces other than gravity are considered. We use the formulae : \n   V=V\u2080+at \n   S=V\u2080t + at\u00B2/2\n   where a = g = 9.81 m/sec\u00B2 .\n \nUse the button to stop and restart the animation";
text[10]="At what time will the ball touch the ground? With what velocity? \n all measurements from the top of the building.\n initial displacement S\u2080= 0 m. Height of the buiding= 113m. \n initial velocity=V\u2080= 0 m/sec.\n acceleration= 9.81m/sec\u00B2.\n Time of impact?  When 113 m has been travelled.\nS=S\u2080+V\u2080 t+g t\u00B2/2\n113=0+0+9.81 x t\u00B2/2 \nt\u00B2=23.04\nt=\u221A23= 4.8 sec\n velocity on impact=a x t= 9.81 x 4.8=47.1 m/sec \n or\nusing V\u00B2= 2 a S\n V=\u221A2 x 9.81 x 113 = \u221A2217=47.1 m/sec ";
text[11]="In the previous exercise, when the ball is dropped, acceleration, velocity and displacement have the same direction i.e. downwards. \nIn the next example, a ball is thrown up. We measure from groundlevel upwards. Acceleration g is always downward (so, negative). At first, velocity is positive and displacement increases. Because of the gravity, velocity decreases (V=V\u2080-g t). The ball slows down. At V=0, displacement stops increasing. We reach maximum height. Thereafter, velocity becomes negative. Displacement decreases";
text[13]="When does the ball reach its highest point? When V=0. \nV = V\u2080 - g t  with initial velocity V\u2080 = 5.6 m/sec.\n  when V=0, t\u2098 = V\u2080/g=0.57 sec\n\nWhat is the highest point reached? . We plug in t\u2098 in the formula S = S\u2080 + V\u2080t + at\u00B2/2 with initial height S\u2080 =1.5 m.\nS=1.5 + 5.6 x 0.57 - 9.81 x 0.57\u00B2/2\n=3.1 m \nCheck out the units m + m/sec x sec + m/sec\u00B2 x sec\u00B2";
	
var Spritesheet= new function(){	 
			this.map={}; 
			this.load=function(imgpix, callback){
				this.map=imgpix;
				this.sheetimage=new Image();
				this.sheetimage.src="img_gravity.png";
				this.sheetimage.onload=	callback;}
			this.drawvideo=function(context, veh , x,y,frame){
					if(!frame){//frame=0;	
						context.drawImage(this.sheetimage,this.map[veh].x,this.map[veh].y, this.map[veh].w,this.map[veh].h,x,y,this.map[veh].w,this.map[veh].h);
						}
					else{
						context.drawImage(this.sheetimage,this.map[veh].x+(frame)*this.map[veh].w,this.map[veh].y,this.map[veh].w,this.map[veh].h,x,y,this.map[veh].w,this.map[veh].h);
						}
					}
			this.scaleddraw=function(context,veh,x,y, scale){
						context.drawImage(this.sheetimage,this.map[veh].x,this.map[veh].y, this.map[veh].w,this.map[veh].h,x,y,Math.round(scale*this.map[veh].w),Math.round(scale*this.map[veh].h));
						}
}


var KButton=function(canvasId,lbl,coords){
	this.width=coords[2]; //200;
	this.height=coords[3];//40;
	this.label=lbl;
	this.buttoncanvas= document.getElementById(canvasId);
	this.buttonctx=this.buttoncanvas.getContext('2d');
	this.buttoncanvas.style="position:absolute; "
	this.buttoncanvas.style.left=coords[0]+"px"; 
	this.buttoncanvas.style.top=coords[1]+"px";
		
	this.drawButton=function(){
		this.buttonctx.fillStyle="rgb(62,249,146)";
		this.buttonctx.fillRect(0,0,this.width,this.height);
		this.buttonctx.fillStyle="black"; 
			//int labelll=fm.stringWidth(label); int offset=(width-labelll)/2; if (offset<0) offset=0;
		this.buttonctx.font="25px Arial";	
		var lblw=this.buttonctx.measureText(this.label).width;
		this.buttonctx.fillText(this.label,  (this.width-lblw)/2, this.height - 5);
	}
	this.changeLabel=function(lbl){
		this.label=lbl;
		}
	this.show=function(){
		this.buttoncanvas.width=this.width;// or 200
		this.drawButton();
		}
	this.buttoncanvas.onclick= function(){//console.log(this);startGame();}//
		Gravity.resolvebutton(this);
		}
	}

var Scene= function(coord){
		this.canvas= document.createElement("canvas");
		this.ctx=this.canvas.getContext('2d');
		this.canvas.style="position:absolute"
		this.canvas.style.left=coord[0]+"px"; 
		this.canvas.style.top=coord[1]+"px";
		this.canvas.width=coord[2];
		this.canvas.height=coord[3];
		//this.canvas.id="scene"+sc_nb;
			
		document.getElementById("the_div").appendChild(this.canvas);		
	
		this.nextrun=function(scnb){		
			if(scnb==1){
				this.mainpict="boywithsling";
				this.t=0;
				this.Tesc=124;
				this.tlimit=145;
				this.x2=150; 
				this.y2=90;
				this.draw(0,120);///x,y for moving object
				}
			else if(scnb==2){
				this.mainpict="earth";
				this.t=0;
				this.tlimit=480;
				this.x2=271;
				this.y2=130;
				this.draw(488, 148);
				}
			else if (scnb==3){
				this.Xapple=[104,232,280];
				this.Yapple=[100,55,125];
				this.Ymoon=70; this.Xmoon=0;
				this.t=0;
				this.tlimit=550;
				this.points_bezier=[[0,70],[100,0],[400,0],[800,100]];
				this.draw(this.Xmoon,this.Ymoon);
			}
			else if (scnb==9){///we dont redraw the building, only the ball
				this.ctx.fillStyle="#6591fd";//lightblue""#9ec5fe";//;
				this.ctx.fillRect(0,0, this.canvas.width,1180);//this.canvas.height);
				this.ctx.fillStyle="rgb(0,136,40)";
				this.ctx.fillRect(0,1180, this.canvas.width,120);
	
				for (var i=0; i<37; i++){
					Spritesheet.drawvideo(scene.ctx,"storey", 30, (i+2)*30);}
				Spritesheet.drawvideo(scene.ctx,"groundfloor", 31, 39*30);
				graph_v= new Graphpaper("VELOCITY",[650,80, 200,400]);
				graph_d= new Graphpaper("DISPLACEMENT",[860,80,200,400]);
				graph_d.drawbg();
				graph_d.setAxes(4,1, "time(sec)", 0.8, 10, "displacement(m)");
				graph_v.drawbg();
				graph_v.setAxes(4,1, "time(sec)", 1.2, 10, "velocity(m/sec)");
				dtext= new UpdatingText(240,80, 370, 300, "rgb(62,249,146)");
				dtext.update(9.81,0,0,0);
				this.t=0;
				this.tlimit=145;
				this.x2=152;
				this.y2=58;
				this.draw(this.x2, this.y2);
		
			}
			else if (scnb==12){
				graph_v= new Graphpaper("VELOCITY",[680,80, 200,400],0.5);///neg and pos v
				graph_d= new Graphpaper("DISPLACEMENT ",[890,80,200,400]);//only pos, but each sec marked
				graph_d.drawbg();
				graph_d.setAxes(10,1, "time(sec)", 20, 0.5, "displacement(m)");
				graph_v.drawbg();
				graph_v.setAxes(10,1, "time(sec)", 6, 2, "velocity(m/sec)");
				dtext= new UpdatingText(300,80, 370, 300, "rgb(62,249,146)");
				dtext.update(9.81,0,0,0);
				this.t=0;
				this.Tesc=4;
				this.tlimit=46;
				this.x2=27;///does not change
				this.y2=67;////measured from top of boys img,hands at 98, ballheight=39 =>59 =too high, because oval, heightof ball like 31
				
				this.draw(this.x2,this.y2);///x,y for moving object
				}
				
		}
		this.step=function(dt){
			this.t+=dt;
			if(this.t>=this.tlimit){
				clearInterval(window.timer);
				window.timer=null;
				if((scnb==9)||(scnb==12)){startbutton.changeLabel("RESTART");
				startbutton.drawButton();}	
				else {startbutton.buttoncanvas.width=0;}
				nextbutton.show();
				}
			else if(scnb==1){
				if(this.t<=this.Tesc){
					var theta=this.t*Math.PI/24+Math.PI/2; ///turning clockwise
					x=Math.round(150*Math.cos(theta));
					y=Math.round(60*Math.sin(theta));
					if(this.t==this.Tesc){
					//console.log("x  " +x+" , y  "+y);
					this.Xesc=x;
						this.Yesc=y;
						this.deltax=Math.cos(Math.PI/6);//theta);
						this.deltay=Math.sin(Math.PI/6); //theta);
					}
					}
				else {//	console.log(this.t+", xesc "+this.Xesc+", yesc  "+this.Yesc);
				//linear speed 150*PI/24 in pix per t= 19.6
					x=Math.round(this.Xesc+19.6*(this.t-this.Tesc)*this.deltax);
					y=Math.round(this.Yesc+19.6*(this.t-this.Tesc)*this.deltay);
			//			console.log("x  " +x+" , y  "+y);
				}
				this.draw(x,y);
				}
			else if(scnb==2){
					var theta=this.t*Math.PI/240 ///turning clockwise
					x=Math.round(200*Math.cos(theta));
					y=Math.round(140*Math.sin(theta));
					this.draw(300+x-12,160+y-12);//300,160,=center; 12=half moon diameter
				}
			else if (scnb==3){///9.8 m/sec in pix/tick 3.5m=9.8*t*t/2 means t=28 ticks for 405 pix,=> 10/19t*t
				if((this.t>8)&&(this.Yapple[1]<(this.canvas.height-60)))if(this.Yapple[1]<this.canvas.height){this.Yapple[1]+=Math.round(10*(this.t-8)*(this.t-8)/20);}
				if((this.t>280)&&(this.Yapple[2]<(this.canvas.height-60))){this.Yapple[2]+=Math.round(10*(this.t-280)*(this.t-280)/20);}
				if((this.t>516)&&(this.Yapple[0]<(342-46))){this.Yapple[0]+=Math.round(10*(this.t-516)*(this.t-516)/20);}
				//console.log("yapple ="+this.Yapple[0]+" at "+this.t);}
				var xy=this.bezierCurve(this.points_bezier,this.t);
		//	console.log("xy ="+xy);
				this.draw(xy[0],xy[1]);
				}
			else if(scnb==9){
				var Tup=0;
				this.v=9.81*(this.t-Tup)/30;  ////all t in msec
				this.d=9.81*(this.t-Tup)*(this.t-Tup)/1800;// 30*30*2
					this.tt=this.t/30;  //round off to the nearest pix, in 1 sec 16 pix, in 1 tick 33 msec
				graph_v.addPoint(this.tt, this.v,"black");
				graph_d.addPoint(this.tt, this.d,"black");
				dtext.update(9.81,this.tt, this.d,this.v);
				this.y=Math.floor(this.y2+this.d*10);///10 pix per m
					this.draw(this.x2,this.y);
				}
			else if(scnb==12){//y is measured on the picture, ball height=31 because oval
					y= [67, 55, 34,6];// from top of boypic; next should be around -27 
					Yesc=223; //boypic at 250 in canvas, at 1.6 m high, lower part of  ball;
					
					if(this.t<4){this.draw(this.x2,y[this.t]);}
					if(this.t>=4){
						var Vo=5.6;//m/sec
						this.v=Vo-9.81*(this.t-this.Tesc)/30; 
						this.d=Vo*(this.t-this.Tesc)/30-9.81*(this.t-this.Tesc)*(this.t-this.Tesc)/1800;//30x30x2
						this.tt=(this.t-this.Tesc)/30;  //round off to the nearest pix, in 1 sec 16 pix, in 1 tick 33 msec
						graph_v.addPoint((this.t-this.Tesc)/30, this.v,"black");
						graph_d.addPoint((this.t-this.Tesc)/30, 1.5+ this.d,"black");
						dtext.update(9.81,(this.t-this.Tesc)/30,1.5+this.d,this.v);
						y=Math.round(Yesc- this.d*120);  //factor 120 pix/m	
						//console.log("t= "+(this.t-4)+"  v= "+this.v);
						//console.log("d= "+this.d);
						//console.log(y);
			
						this.draw(this.x2,y);
								}
					}
			}
			
this.bezierCurve=function(points,tick){ ///array of 4 arrays of x,y
			var xy=Array(2);
			t=tick/512;//for(var t=0; t<=1; t+=0.025){//1 t per pixel
			var x=Math.pow((1-t),3)*points[0][0]+3*t*(1-t)*(1-t)*points[1][0]+3*t*t*(1-t)*points[2][0]+t*t*t*points[3][0];
			var y=Math.pow((1-t),3)*points[0][1]+3*t*(1-t)*(1-t)*points[1][1]+3*t*t*(1-t)*points[2][1]+t*t*t*points[3][1];
			//	console.log("xy ="+x+","+y);///ok
			xy=[x,y];
	return xy;
	}
	
this.draw= function(x,y){
	if(scnb==1){
		this.ctx.fillStyle="rgb(62,249,146)";
		this.ctx.fillRect(0,0, this.canvas.width,this.canvas.height);
		Spritesheet.drawvideo(scene.ctx,scene.mainpict, this.x2, this.y2);
			this.ctx.fillStyle="red";
			this.ctx.beginPath();
			var handx=84;
			var handy=17;
			this.ctx.ellipse(this.x2+handx+x,this.y2+handy+y,12,12,0,0,2*Math.PI, true);
			this.ctx.closePath();
			this.ctx.fill();
				
		if(this.t<=this.Tesc){//console.log(this.t);
			this.ctx.strokeStyle="black";
			this.ctx.beginPath();
			this.ctx.moveTo(this.x2+handx, this.y2+handy);
			this.ctx.lineTo(this.x2+handx+x, this.y2+handy+y);
			this.ctx.stroke();
			}
		else if(this.t<=134){
			this.ctx.strokeStyle="black";
			this.ctx.beginPath();
			this.ctx.moveTo(this.x2+handx, this.y2+handy);
			this.ctx.quadraticCurveTo(this.x2+handx+80, this.y2+handy,this.x2+handx+20, this.y2+handy+150);
			this.ctx.stroke();
			}
		else {
			this.ctx.strokeStyle="black";
			this.ctx.beginPath();
			this.ctx.moveTo(this.x2+handx, this.y2+handy);
			this.ctx.lineTo(this.x2+handx, this.y2+handy+120);
			this.ctx.stroke();
			}
		}
		else if (scnb==2){
			this.ctx.fillStyle="rgb(0,0,0)";///black or darkblue(0,40,110)
			this.ctx.fillRect(0,0, this.canvas.width,this.canvas.height);
			Spritesheet.scaleddraw(scene.ctx,scene.mainpict, this.x2, this.y2, 0.25);
			Spritesheet.scaleddraw(scene.ctx,"moon", x, y, 0.15);
		
		}
		else if (scnb==3){
			this.ctx.fillStyle="rgb(0,64,128)";//"#16c460";// rgb(62,249,146)";
			this.ctx.fillRect(0,0, this.canvas.width,this.canvas.height);
			Spritesheet.scaleddraw(scene.ctx,"moon", Math.round(x),Math.round(y), 0.6);
			Spritesheet.scaleddraw(scene.ctx,"Newton", 50, 370, 0.75);///newton position depends on distance tavelled by apple in last tick
			Spritesheet.drawvideo(scene.ctx,"branch", 0, 0);
		for (var i=0; i<3;i++){
			Spritesheet.drawvideo(scene.ctx,"apple", this.Xapple[i], this.Yapple[i]);
			}
		}
		else if (scnb==4){
			this.ctx.fillStyle="#16c460";// rgb(62,249,146)";
			this.ctx.fillRect(0,0, this.canvas.width,this.canvas.height);
			Spritesheet.drawvideo(scene.ctx,"solarsystem", 10, 100);
			Spritesheet.drawvideo(scene.ctx,"galaxies", 600, 240);
			}
		else if (scnb==9){
			this.ctx.fillStyle= "#6591fd";//lightblue"#9ec5fe";//
				this.ctx.fillRect(132,0, 70,1180);//this.canvas.height);
				this.ctx.fillStyle="rgb(0,136,40)";//grass
				this.ctx.fillRect(132,1180, 70,100);
			this.ctx.fillStyle="red";
			this.ctx.beginPath();
			this.ctx.ellipse(x,y,12,12,0,0,2*Math.PI, true);
			this.ctx.closePath();
			this.ctx.fill();
			var halfway=Math.round(0.4*window.innerWidth);
			if(y>halfway){
				this.canvas.style.top=-y+halfway;}
			}
		else if (scnb==12){
			this.ctx.fillStyle="rgb(62,249,146)";//"#16c460";// 
			this.ctx.fillRect(0,0, this.canvas.width,this.canvas.height);
			this.x1=52;
			this.y1=this.canvas.height-200;
			if(this.t<4){Spritesheet.drawvideo(scene.ctx,"ball_throwing",this.x1,this.y1,this.t);//videoboys pic at x1,y1
						Spritesheet.drawvideo(scene.ctx,"ball",this.x1+x,this.y1+y);}
			else {
				Spritesheet.drawvideo(scene.ctx,"ball_throwing",this.x1,this.y1,4 );//boy arms up
				Spritesheet.drawvideo(scene.ctx,"ball",this.x1+x,y);
				}
				
		/*this.ctx.fillStyle="red";
			this.ctx.beginPath();
			this.ctx.ellipse(x1+x,y1+98-y,20,20,0,0,2*Math.PI, true);
			this.ctx.closePath();
			this.ctx.fill();
			*/}
	}
}
var Gravity= new function(){
	this.initialize = function(imgpixels,callback){
	//document.getElementById("the_div").appendChild(this.canvas);		
		startbutton=new KButton("button1","START", [50,565,160,40]);
		startbutton.drawButton();
		nextbutton=new KButton("button2","NEXT", [250,565,160,40]);
		stopbutton=new KButton("button3","STOP",[450,565,160,40]);
		Spritesheet.load(imgpixels,callback);
		var scene=null;
	}
			
	this.nextrun=function(){
		console.log("scnb"+scnb);	
		console.log(document.getElementById("the_div").childNodes);	
		if((scnb<4)||(scnb==9)||(scnb==12)){
			startbutton.show();
			nextbutton.buttoncanvas.width=0;}
		if((scnb==1)||(scnb==2)){
			scene= new Scene([0,60,600,320]);
			mytitle= new TextHandler(40,22,20+scene.canvas.width,2,"rgb(62,249,146)");
			mytext=new TextHandler(40,22,20+scene.canvas.width,60,"rgb(62,249,146)");//40=nbofcolumns, 22 is font
			if(scnb<4){mytext.draw(text[scnb-1]);
						mytitle.draw(title[scnb-1]);}
			else if(scnb>4){mytext.draw(text[scnb]);}
			scene.nextrun(scnb);}
		else if(scnb==3){
			scene= new Scene([0,0,window.innerWidth, 565]);
			mytext=new scienceTextHandler(text[2],40,22,Math.round(window.innerWidth/2),160,"#9ec5fe");
				console.log(innerWidth+"windowheight= "+innerHeight);
			mytitle= new TextHandler(40,22,Math.round(window.innerWidth/2),10,"rgb(159,197,254)");
			mytitle.draw(title[scnb-1]);
			scene.nextrun(scnb);
			}
		else if (scnb==4){
			nextbutton.show();
			//startbutton.buttoncanvas.width=0;
			scene= new Scene([0,0,window.innerWidth, 450]);
			mytext=new TextHandler(30,22,10,10,"rgb(62,249,146)");
			mytext2=new TextHandler(30,22,600,140,"rgb(62,249,146)");
			mytext.draw(text[scnb-1]);
			mytext2.draw(text[scnb]);
			scene.draw(0,0);
			}
		else if ((scnb==5)||(scnb==6)||(scnb==7)){
			mytext=new scienceTextHandler(text[scnb],60,22,50,10,"rgb(62,249,146)");
			nextbutton.show();
		}
		else if ((scnb==8)||(scnb==10)||(scnb==11)||(scnb==13)){
			mytext= new TextHandler(60,22,50,10,"rgb(62,249,146)");
			mytext.draw(text[scnb]);
			startbutton.buttoncanvas.width=0;
			stopbutton.buttoncanvas.width=0;
			nextbutton.show();
			}
		else if (scnb==9){
			scene= new Scene([0,0,200,1300]);
			mytitle= new TextHandler(40,22,300,10,"rgb(62,249,146)");
			mytitle.draw("FREE FALL");
			startbutton.buttoncanvas.style.left="280px";
			nextbutton.buttoncanvas.style.left="480px";
			stopbutton=new KButton("button3","STOP", [680,565,160,40]);
			stopbutton.drawButton();
			scene.nextrun(scnb);
			}
		else if (scnb==12){
			scene= new Scene([50,80,200,450]);
			startbutton.buttoncanvas.style.left="50px";
			startbutton.show();
			stopbutton.buttoncanvas.style.left="410px";
			nextbutton.buttoncanvas.style.left="230px";
			//stopbutton=new KButton("button3","STOP", [680,565,160,40]);
			stopbutton.show();
			scene.nextrun(scnb);
			}
		else if (scnb==14){mytitle= new TextHandler(40,22,100,100,"rgb(62,249,146)");
			mytitle.draw("END OF THE DEMO");
			}
		}
	this.loop=function(){
		if(animationstopped==false){scene.step(1);}
		}
	this.resolvebutton=function(whichbutton){ 
		if((whichbutton==button1)&&(startbutton.label=="START")){//console.log(whichbutton);
			if(window.timer==null){
					window.timer=setInterval(Gravity.loop,30);
							//console.log("timer"+timer);
							}
			 else if((scnb==9)||(scnb==12)){
				if(animationstopped==true){animationstopped=false;this.loop;}
				}
			}
		else if((whichbutton==button2)||((whichbutton==button1)&&(startbutton.label=="RESTART"))){
		//else if (whichbutton==button2){
			var toRemove=null;
			switch(scnb){
				case 1: case 2: toRemove=new Array(scene.canvas,mytext.input, mytitle.input); break;
				case 3 : toRemove=[];
						toRemove.push(scene.canvas); 
						toRemove.push(mytitle.input);
						Array.prototype.push.apply(toRemove,mytext.listofcanvasses);
						break;
				case 4:  toRemove=new Array(scene.canvas,mytext.input, mytext2.input); break;
				case 5:  case 6 : case 7:
				
						toRemove=mytext.listofcanvasses;
						break;
				case 8: case 10 : case 11 :case 13 : toRemove=[mytext.input];
						break;
				case 9 :toRemove=new Array(scene.canvas,graph_d.graphcanvas, graph_v.graphcanvas, dtext.canvas,mytitle.input); 
						startbutton.changeLabel("START");break;
				case 12 :toRemove=new Array(scene.canvas,graph_d.graphcanvas, graph_v.graphcanvas, dtext.canvas); 
						startbutton.changeLabel("START");break;
						
			default: alert("problem in removing canvasses");
				}
			for (var i=0;i<toRemove.length;i++){
					document.getElementById("the_div").removeChild(toRemove[i]);
					}
			if(whichbutton==button2){scnb+=1;}///otherwise restart
			//else if ((whichbutton==button1)&&(startbutton.label=="RESTART"))
			this.nextrun();
			
			}
			else if(whichbutton==button3){
				animationstopped=true;
				//startbutton.changeLabel("RESTART");
				}
	}
}
		
window.addEventListener("load",function(){Gravity.initialize(imgpix,Gravity.nextrun)});