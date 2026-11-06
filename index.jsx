function moveSnake() {
           
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };

            
            if (head.x < 0) {
                head.x = tileCount - 1; 
            } else if (head.x >= tileCount) {
                head.x = 0;             
            }

            if (head.y < 0) {
                head.y = tileCount - 1; 
            } else if (head.y >= tileCount) {
                head.y = 0;            
            }

            snake.unshift(head);

            const hasEatenFood = snake[0].x === food.x && snake[0].y === food.y;
            if (hasEatenFood) {
                score += 10;
                scoreElement.textContent = score;
                generateFood();
            } else {
                snake.pop();
            }
        }