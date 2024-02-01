class c_bullet
    {
        constructor (l_x, l_y)
        {

            
            this.xpos=l_x;
            this.ypos=l_y;
            this.radius=20;
            this.color="#ff000a";
           
            this.initial_velocity=30;
            this.acceleration=-1;
            
            this.Start_animat_flag=0;
            
            this.ySpeed=this.initial_velocity;
            this.xSpeed=20;
            this.dX = 0;
            this.launchAngle=0;
            
            
        }
        
        m_draw_bullet(l_context)
        {
            l_context.fillStyle=this.color;
            l_context.beginPath();
            l_context.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI);
            l_context.closePath();
            l_context.fill();
        }
       
        m_Border_collision(l_canvas)//bullet collision
        {
        
            if ((this.ypos + this.radius) > l_canvas.height) 
                {
                    this.ypos = l_canvas.height - this.radius;
                    this.xpos=tank.centerX;
                    this.ypos=tank.centerY;
                    this.radius=20;
                    this.color="#ff000a";
           
                    this.initial_velocity=30;
                    this.acceleration=-1;
            
                    this.Start_animat_flag=0;
            
                    this.ySpeed=this.initial_velocity;
                    this.xSpeed=20;
                    this.dX = 0;
                    this.launchAngle=0;
                
           
                    
                }
			
            if((this.xpos + this.radius) > l_canvas.width)
                {
					
                    this.xpos=l_canvas.width - this.radius;
                    this.xpos=tank.centerX;
                    this.ypos=tank.centerY;
                    this.radius=20;
                    this.color="#ff000a";
           
                    this.initial_velocity=30;
                    this.acceleration=-1;
            
                    this.Start_animat_flag=0;
            
                    this.ySpeed=this.initial_velocity;
                    this.xSpeed=20;
                    this.dX = 0;
                    this.launchAngle=0;
                
                    
           
                    
                }
            
        }
        m_movement()
        {
            if(this.Start_animat_flag==1)
                {
                    
                     this.dX= this.xSpeed* Math.sin(this.launchAngle);
                     console.log(this.launchAngle);
					
                    if(Math.sign(this.dX)==1)
                        {
                        this.xpos+=this.dX;
                        }
                    else
                        {
                            this.xpos-=this.dX;
                        }
                    console.log(this.ySpeed+" yspeed  "+ this.xSpeed+"  xspeed");
                    
                     this.ypos-=this.ySpeed;
                     this.ySpeed+=this.acceleration;
                     
                    
                }
         }
          
             
        
    }