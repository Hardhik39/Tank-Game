class c_TANK
            {
                constructor(l_x,l_y)
                    {
                        
                        this.width=200;
                        this.height=200;
                        this.Basecolor="Red";
                        this.X=l_x;
                        this.Y=l_y;
                        this.TurretColor="blue";
                        this.centerX = this.X+(this.width/2);
                       this.centerY = this.Y+(this.height/2);
                       this.rotatespeed=5;
                        this.MoveLeftflag=0;
                        this.MoveRightflag=0;
    
                    this.TurretWidth = 50;
                        this.TurretHeight = 150;
                   this.g_rotateangle=270;
                        
                         this.bullet = new c_bullet(this.centerX,this.centerY);
                    }
                
                
                    m_drawTank(l_context)
                    {
                        l_context.fillStyle=this.Basecolor;
                    l_context.fillRect(this.X, this.centerY,this.width,this.height);
                        
                        
                        l_context.fillStyle=this.TurretColor;
                        l_context.beginPath();
                        l_context.arc(this.centerX,this.centerY,this.width/2,Math.PI,2*Math.PI);
                        l_context.closePath();
                        l_context.fillStyle=this.Basecolor;
                        l_context.fill();
                        
                        
                l_context.save();
                l_context.translate(this.centerX,this.centerY); // move back
                l_context.rotate(Math.PI*this.g_rotateangle/180); // rotate
                l_context.fillStyle=this.TurretColor;
                l_context.fillRect(-(this.TurretWidth/2), 0,this.TurretWidth,this.TurretHeight);
                l_context.restore();
                        
                        l_context.fillStyle=this.TurretColor;
                        l_context.beginPath();
                        l_context.arc(this.centerX,this.centerY,this.TurretWidth/2,0,2*Math.PI);
                        l_context.closePath();
                        l_context.fill();
                        
                        this.bullet.m_draw_bullet(l_context);
                    }
                 
                m_rotateTurret(l_canvas)
                {
                    if(this.MoveLeftflag==1)
                    {
                        this.g_rotateangle -= this.rotatespeed;
                        this.MoveLeftflag=0;
                         console.log(this.g_rotateangle+"y");
                        
                    }
                    if(this.MoveRightflag==1)
                    {
                        this.g_rotateangle +=this.rotatespeed;
                        this.MoveRightflag=0;
                        console.log(this.g_rotateangle+"x");
                       
                    }
                    this.bullet.m_movement();
                    this.bullet.m_Border_collision(l_canvas);
                
                }
                
                m_Shoot()//shooting the bullet
                {
                    if(this.bullet.Start_animat_flag==0)
                        {
                    this.bullet.launchAngle = this.g_rotateangle;
                            console.log(this.bullet.launchAngle);
                        }
                      if(this.bullet.launchAngle>=180 && this.bullet.launchAngle<200)
                {
                    this.bullet.initial_velocity++;
                    this.bullet.xSpeed-=0.2;
                }
            if(this.bullet.launchAngle>=200 && this.bullet.launchAngle<=250)
                {
                    
                    this.bullet.initial_velocity--;
                    this.bullet.xSpeed+=0.2;
                }
            if(this.bullet.launchAngle>250 && this.bullet.launchAngle<=270)
                {
                    this.bullet.initial_velocity-=2;
                    this.bullet.xSpeed-=2;
                }
            if(this.bullet.launchAngle>270)
                {
                    this.bullet.initial_velocity=0;
                    this.bullet.xSpeed+=5;
                }
        }
                    
                
                
            }
                
                
                
            