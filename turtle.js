///////////////////////////////////////////////////////////
// 
// Turtle Graphics for HTML5 Canvas
//
// (c) 2013 Edward F. Hardebeck
//
// Original at https://github.com/ehardebeck/turtle
//
// Turtle graphics is a form of polar coordinate vector graphics
// initially developed as part of the Logo programming language
// invented by Seymour Papert and Wally Feurzeig.  The original 
// turtle was a physical robot with a pen attached to the bottom.  
//
// For more on Turtle Graphics see:
//
// "Mindstorms: Children, Computers, And Powerful Ideas"
//    Seymour Papert, 1993 Basic Books; ISBN-10: 0465046746
//
// "Turtle Geometry: The Computer as a Medium for Exploring Mathematics"
//    Harold Abelson, Andrea diSessa; 1986 The MIT Press; ISBN-10: 0262510375  
//
// http://en.wikipedia.org/wiki/Turtle_graphics
//
// http://en.wikipedia.org/wiki/Logo_(programming_language)
//
// You may use or modify this program for any purpose as long as this entire
// copyright notice is retained.
//
////////////////////////////////////////////////////////////

function $$(id) 
{ 
    return document.getElementById(id);
}

/* constructor */
function Turtle(canvas) 
{
    if (typeof(canvas) == "string") canvas = $$(canvas);

    if (canvas) 
    {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        if (!this.context)
            throw "canvas 2d context not supported!";
    }
}

Turtle.prototype.xpos     = 196.0;		// xpos in canvas coordinates (origin top-left)
Turtle.prototype.ypos     = 128.0;		// ypos in canvas coordinates
Turtle.prototype.rheading = Math.PI / 2.0;	// heading in radians, 0 on x-axis increasing counterclockwise
						// (turtle 0 heading is North, y-axis, increases clockwise)
Turtle.prototype.color    = "#00FF00";

Turtle.prototype._degToRad = function(deg)
{
    return (deg * 2.0 * Math.PI) / 360.0;
}

Turtle.prototype._checkInit = function ()
{

}

Turtle.prototype.fd = function(d)
{
   this._checkInit();

   var nx = this.xpos + Math.cos(this.rheading) * d;
   var ny = this.ypos - Math.sin(this.rheading) * d;

   this.context.beginPath();
   this.context.moveTo(this.xpos, this.ypos);
   this.context.lineTo(nx, ny);
   this.context.strokeStyle = this.color;
   this.context.stroke();

   this.xpos = nx;
   this.ypos = ny;
}

Turtle.prototype.bk = function(d)
{
    this.fd(-d);
}

Turtle.prototype.rt = function(a)
{
    this._checkInit();

    this.rheading -= this._degToRad(a);
}

Turtle.prototype.lt = function(a)
{
    this.rt(-a);
}

Turtle.prototype.setcolor = function(c)
{
    this.color = c;
}

Turtle.prototype.clear = function()
{
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Turtle.prototype.forward = Turtle.prototype.fd;
Turtle.prototype.back    = Turtle.prototype.bk;
Turtle.prototype.right   = Turtle.prototype.rt;
Turtle.prototype.left    = Turtle.prototype.lt;




