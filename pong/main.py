import pygame
import sys
import config

pygame.init()

window = pygame.display.set_mode((config.SCREEN_WIDTH, config.SCREEN_HEIGHT))
pygame.display.set_caption('Pong')

running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
    config.POS_X += config.SPEED_X * 5
    config.POS_Y += config.SPEED_Y * 5
    
    if  config.POS_X <= 0 or config.POS_X >= config.SCREEN_WIDTH - config.CHAR_WIDTH:
        config.SPEED_X = -config.SPEED_X

    if  config.POS_Y <= 0 or config.POS_Y >= config.SCREEN_HEIGHT - config.CHAR_HEIGTH:
        config.SPEED_Y = -config.SPEED_Y
    window.fill(config.BLACK)
    pygame.draw.rect(window, config.WHITE, (config.POS_X, config.POS_Y, config.CHAR_WIDTH, config.CHAR_HEIGTH))
    
    pygame.display.update()
    
    pygame.time.Clock().tick(config.FPS)

pygame.quit()
sys.exit()
