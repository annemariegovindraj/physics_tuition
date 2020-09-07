//this graph is less neat than graphpaper
var Graphpaper= function(lbl,coords,yaxis){///if yaxis =0.6 yaxis will be divided in 6/10 pos and 4/10 neg,
	this.graphcanvas=document.createElement("canvas"); 
	this.graphcanvas.width=coords[2]; 
	this.graphcanvas.height=coords[3];
	this.label=lbl;
	this.graphcanvas.style="position:absolute; "
	this.graphcanvas.style.left=coords[0]+"px"; 
	this.graphcanvas.style.top=coords[1]+"px";
	this.graphctx=this.graphcanvas.getContext('2d');
	this.graphctx.font="14px Verdana";
	this.graphctx.fillStyle="#FEF";
	this.graphctx.globalAlpha=1;
	this.graphctx.fillRect(0,0,this.graphcanvas.width, this.graphcanvas.height) ;
	var scale=4;
	var po=scale*6;
	var qo=this.graphcanvas.height-scale*5;
	if(yaxis){qo=this.graphcanvas.height*(yaxis);}
			
	this.oldx=0;
	this.oldy=0;
	document.getElementById("the_div").appendChild(this.graphcanvas);
	var metrics=0;
	
	this.drawbg=function(){
		//this.graphctx.restore();
		this.graphctx.fillStyle="#FEF";
		this.graphctx.globalAlpha=1;
		this.graphctx.fillRect(0,0,this.graphcanvas.width, this.graphcanvas.height) ;
		this.graphctx.translate(0.5,0.5);
			 this.graphctx.beginPath();
			 this.graphctx.strokeStyle="orange";
			for(var l=0, cl=this.graphcanvas.width;l<cl;l+=4)
				{this.graphctx.moveTo(l,0);
				this.graphctx.lineTo(l,this.graphcanvas.height);}
			for(var l=0, cl=this.graphcanvas.height;l<cl;l+=scale)
				{this.graphctx.moveTo(0,l);
				this.graphctx.lineTo(this.graphcanvas.height,l);}//this.graphctx.drawLine(0,l,graphcanvas.width,l);}
			this.graphctx.stroke();
			this.graphctx.closePath();
			this.graphctx.restore();
	
	}
	this.setAxes=function(unx, divx, labelx, uny, divy,labely){
		//unitx : squares per unit 
		//graph[i].setAxis(4, 1,"time(sec)", unity[i],divy[i], variab[i]); }
		//divx, divy : each division in units
		// divy*unity should be around 10-20
		this.unitx=unx; this.unity=uny; //this.divx=divx; this.divy=divy;	
		 //////default horizontal axis
		 this.graphctx.beginPath();
		 this.graphctx.strokeStyle="black";
		 this.graphctx.fillStyle="black";
		 this.graphctx .moveTo(po,qo);
		 this.graphctx.lineTo(this.graphcanvas.width-1,qo);
		 this.graphctx.moveTo(po,this.graphcanvas.height-1);
		 this.graphctx.lineTo(po,1);
		
		 for(var p=po, i=0; p< this.graphcanvas.width; p+=scale*divx*this.unitx, i++)
			{this.graphctx.moveTo(p,qo);///little lines at units
			this.graphctx.lineTo(p,qo-scale);
			if (i%2===0) {	metrics=this.graphctx.measureText(""+Math.floor(i*divx/2)).width;
							this.graphctx.fillText(""+i*divx, p-metrics, qo+4*scale ); }
			}
		metrics=this.graphctx.measureText(labelx);
		this.graphctx.fillText(labelx, this.graphcanvas.width-metrics.width, qo-2*scale); 
		
			if(yaxis){
		for(var q=qo, i=0; q<this.graphcanvas.height; q+=divy*scale*this.unity, i++){
			this.graphctx.moveTo(po-scale,q);
			this.graphctx.lineTo(po,q);
			if (i%2===0) {this.graphctx.fillText("-"+i*divy, po-5*scale, q+scale ); }
			}
		}
		for(var q=qo, i=0; q>0; q-=divy*scale*this.unity, i++){
			this.graphctx.moveTo(po-scale,q);
			this.graphctx.lineTo(po,q);
			if (i%2===0) {this.graphctx.fillText(""+i*divy, po-5*scale, q+scale ); }
			}
	
		this.graphctx.fillText(labely,po+ scale, 30); 
		
		 this.graphctx.stroke();
		 this.graphctx.closePath();
		//for(int p=po, i=0; p<dwidth; p+=pix*divx*unitx, i++){pg.drawLine(p, qo,p, qo-pix);   //divisions on Xaxis
		}
	this.traceCurve=function(xfunction,xmin,xmax,yfunction,colour){
		 this.graphctx.beginPath();
		 this.graphctx.strokeStyle=colour;
		 
		 this.graphctx.moveTo(po+xmin*this.unitx*scale,this.unit*scale*yfunction(xmin));
		 for (var xi=xmin; xi<xmax;xi+=xfunction){
			this.graphctx.lineTo(po+xi*this.unitx*scale,qo-this.unity*scale*yfunction(xi));}
		 this.graphctx.stroke();
		 this.graphctx.closePath();
		}
	this.setStyle=function(fontsizzandname){
		this.graphctx.font=fontsizzandname;
		}
	this.addPoint=function(newx, newy,colour){
		 this.graphctx.beginPath();
		 this.graphctx.strokeStyle=colour;
		 this.graphctx.moveTo(po+Math.round(this.oldx*this.unitx*scale),Math.round(qo-this.oldy*this.unity*scale));
		 this.graphctx.lineTo(po+Math.round(newx*this.unitx*scale),Math.round(qo-newy*this.unity*scale));
		 this.graphctx.stroke();
		 this.graphctx.closePath();
		 this.oldx=newx; this.oldy=newy;
		}
	this.addLabel=function(x,y,mystring,colour,fontsize){
		this.graphctx.fillStyle=(colour||"black");
		this.graphctx.fillText(mystring,po+x*this.unitx*scale,qo-y*this.unity*scale);
		}
	}	
