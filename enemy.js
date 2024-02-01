class c_Enemy
    {
        constructor(l_x,l_y)
        {
            this.Enemy_x=l_x;
            this.Enemy_y=l_y;
            this.Enemy_width=100;
            this.Enemy_height=100;
            this.Movementspeed=5;
        }
		
        m_draw_enemy(l_context)
        {
            l_context.fillStyle="#000000";
            l_context.fillRect(this.Enemy_x,this.Enemy_y,this.Enemy_width,this.Enemy_height);
        }
		
        m_Enemy_movement()
        {
            this.Enemy_x-=this.Movementspeed;
        }
    }