  function setup() 
  { 
                createCanvas(500, 500); 
} 
            
            function draw() { 
                background('black'); 
                fill('yellow'); 
                triangle(100, 250, 250, 170, 330, 300); 
                var area=x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2);
            area=area/2;






            console.log(area);
            } 

            