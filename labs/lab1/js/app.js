function setup() {

    //color variables
        var rope = "#90776c";
        var pot = "#6dada6";
        var leaves = "#abb663";
        var bead = "#cc9f31";
    
    
        //creates canvas size
        createCanvas(800,800);
        angleMode(degrees);
    
            //background color
            background("#f5f5f5")
    
            //plant
                strokeWeight(6);
                stroke(leaves);
                noFill();
    
    
                //left-most leaves
                curve(400, 400, 250, 400, 270, 250, 400, 0);
                fill(leaves);
                
                arc(240, 400, 20, 15, 180, 360, OPEN);
                arc(245, 375, 10, 25, 0, QUARTER_PI , PIE);
                arc(230, 360, 20, 15, 180, 360, OPEN);
                arc(250, 300, 20, 35, 0, PI + QUARTER_PI, PIE);
                arc(270, 270, 10, 25, 0, PI , PIE);
                arc(260, 250, 10, 25, 0, QUARTER_PI , PIE);
    
                //right-most leaves
                noFill();
                curve(5, 503, 235, 505, 390, 320, 200, 290);
                fill(leaves);
                
                arc(360, 390, 20, 15, 180, 360, OPEN);
                arc(370, 355, 10, 25, 0, QUARTER_PI , PIE);
                arc(390, 330, 20, 15, 180, 360, OPEN);
                arc(365, 350, 20, 35, 0, PI + QUARTER_PI, PIE);
                arc(270, 270, 10, 25, 0, PI , PIE);
                arc(260, 250, 10, 25, 0, QUARTER_PI , PIE);
    
                //middle & bottom leaves
                noFill();
    
                curve(180, 400, 280, 400, 310, 370, 310, 370);
                fill(leaves);
                arc(280, 380, 20, 35, 0, PI + QUARTER_PI, PIE);
                arc(320, 370, 10, 25, 0, PI , PIE);
                arc(290, 375, 10, 25, 0, QUARTER_PI , PIE);
    
                arc(280, 380, 30, 45, 0, PI + QUARTER_PI, PIE);
                arc(260, 400, 30, 35, 180, 360, OPEN);
                arc(210, 400, 30, 35, 180, 360, OPEN);
                arc(320, 400, 30, 35, 180, 360, OPEN);
                arc(350, 360, 30, 35, 180, 360, OPEN);
                arc(340, 400, 30, 35, 180, 360, OPEN);
                arc(280, 360, 30, 35, 0, PI + QUARTER_PI, PIE);
            
    
            
    //pot
            fill(pot);
            stroke(rope);
            strokeWeight(6);
            arc(300, 400, 200, 280, TWO_PI, PI, OPEN);
    
    
    
    
     //macrame
            strokeWeight(6);
            curve(300, 400, 200, 400, 300, 475, 500, 450);
            curve(200, 375, 400, 400, 300, 475, 300, 350);
            curve(135, 405, 235, 505, 300, 475, 300, 375);
            curve(565, 405, 365, 505, 300, 475, 300, 400);
    
        //bottom dangling strings
            curve(300, 550, 300, 550, 280, 600, 250, 600);
            curve(300, 550, 300, 550, 290, 610, 240, 610);
            curve(300, 550, 300, 550, 320, 590, 340, 590);
    
        //hanging strings
            line(300, 475, 300, 50);
            line(400, 400, 300, 250);
            line(200, 400, 300, 250);
    
        //rope beads    
            strokeWeight(20);
            stroke(pot);
            point(300, 250);
            stroke(bead);
            point(300, 233);
            stroke(pot);
            point(300, 216);
    
    
        //rope knots
            stroke(rope);
            //top left
                point(200, 400);
            //top right
                point(400, 400);
            //bottom left
                point(235, 505);
            //bottom right    
                point(365, 505);
            //middle    
                point(300, 475);
            //bottom
                point(300, 550);
    
            
            
    
    
    
    
    
    
    
    }