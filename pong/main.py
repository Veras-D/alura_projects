import pygame
import sys
import config

pygame.init()

window = pygame.display.set_mode((config.SCREEN_WIDTH, config.SCREEN_HEIGHT))
pygame.display.set_caption('Pong Game')

running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
    keys = pygame.key.get_pressed()
    if keys[pygame.K_w]:
        if not config.PLAYER_POS_Y <= 0:
            config.PLAYER_POS_Y -= config.PLAYER_SPEED
        
    if keys[pygame.K_s]:
        if not config.PLAYER_POS_Y >= config.SCREEN_HEIGHT - config.CHAR_HEIGTH:
            config.PLAYER_POS_Y += config.PLAYER_SPEED

    config.BOLL_POS_X += config.SPEED_X * config.ACER
    config.BOLL_POS_Y += config.SPEED_Y * config.ACER
    
    config.ADVS_POS_Y += config.ADVS_SPEED
    
    # Colocar Biri-Biri como trilha  sonora para o jogo
    
    if  config.BOLL_POS_X <= 0 or config.BOLL_POS_X >= config.SCREEN_WIDTH - config.BOLL_WIDTH:
        config.BOLL_POS_X = config.SCREEN_WIDTH // 2 - config.BOLL_WIDTH // 2
        config.BOLL_POS_Y = config.SCREEN_HEIGHT // 2 - config.BOLL_HEIGTH // 2
        config.ACER = 6
        config.SPEED_X, config.SPEED_Y = config.speed_fun()
        # Usar isso para fazer pontuação
        # Copiar esse trecho mudando da parede apara o player e o adversário e player
            # Usar essa parte também para aumentar a aceleração
            # Colocar som nessa parte?
    
    if  config.BOLL_POS_Y <= 0 or config.BOLL_POS_Y >= config.SCREEN_HEIGHT - config.BOLL_HEIGTH:
        config.SPEED_Y = -config.SPEED_Y
        
    if  config.ADVS_POS_Y <= 0 or config.ADVS_POS_Y >= config.SCREEN_HEIGHT - config.CHAR_HEIGTH:
        config.ADVS_SPEED = -config.ADVS_SPEED
    
    
    window.fill(config.BLACK)
    ball = pygame.draw.rect(window, config.WHITE, (config.BOLL_POS_X, config.BOLL_POS_Y, config.BOLL_WIDTH, config.BOLL_HEIGTH))
    player = pygame.draw.rect(window, config.WHITE, (config.PLAYER_POS_X, config.PLAYER_POS_Y, config.CHAR_WIDTH, config.CHAR_HEIGTH))
    adversary = pygame.draw.rect(window, config.WHITE, (config.ADVS_POS_X, config.ADVS_POS_Y, config.CHAR_WIDTH, config.CHAR_HEIGTH))
    
    if  ball.colliderect(player) or  ball.colliderect(adversary):
        config.SPEED_X = -config.SPEED_X
        config.ACER += 1
    
    pygame.display.update()
    
    pygame.time.Clock().tick(config.FPS)

pygame.quit()
sys.exit()
